import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useRef, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface Suggestions {
  productSlug: string;
  productTitle: string;
  productPartNo: string;
  productImage: string;
}

const AutocompleteInput = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<Suggestions[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleInputChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputValue(value);

    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BASE_URL + "nextapi/other/keywords",
        { keywordText: value }
      );
      if (res.status === 200) {
        setSuggestions(res.data.keywords);
      } else {
        throw new Error("Failed to fetch products");
      }
    } catch (error) {
      console.error("Error fetching products:");
    }
    setShowSuggestions(true);
  };

  const handleSelectSuggestion = (suggestion: Suggestions) => {
    setInputValue(suggestion.productTitle);
    setSuggestions([]);
    setShowSuggestions(false);
    router.push(`/pages/products/${suggestion.productSlug}`);
  };

  const handleClickOutside = (event: any) => {
    if (inputRef.current && !inputRef.current?.contains(event.target)) {
      setShowSuggestions(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={inputRef}>
      <input
        className="border-gray-200 border p-2 px-4 rounded-lg w-full focus:border-blue-500"
        type="text"
        placeholder="Enter any product name..."
        value={inputValue}
        onChange={handleInputChange}
      />

      <IoSearchOutline
        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400 cursor-pointer"
        size={20}
      />

      {showSuggestions && suggestions.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-lg mt-2 w-full z-50 shadow-md divide-y divide-gray-300">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-3 flex items-center cursor-pointer transition duration-300 hover:bg-gray-100"
              onClick={() => handleSelectSuggestion(suggestion)}
            >
              <div className="flex-shrink-0 mr-3">
                <Image
                  src={suggestion.productImage}
                  alt={"img"}
                  width={45}
                  height={45}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-grow">
                <p className="text-gray-900 text-sm font-semibold">
                  {suggestion.productTitle}
                </p>
                <p className="text-gray-600  text-xs">
                  {suggestion.productPartNo}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutocompleteInput;
