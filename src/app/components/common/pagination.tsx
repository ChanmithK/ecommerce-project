import React, { FC, MouseEvent } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const isCurrentPage = (pageNumber: number) => currentPage === pageNumber;

  const renderPageNumber = (pageNumber: number) => (
    <li key={pageNumber}>
      <a
        href="#"
        onClick={(event: MouseEvent) => {
          event.preventDefault();
          onPageChange(pageNumber);
        }}
        className={`flex items-center justify-center px-3 h-8 leading-tight text-white ${
          isCurrentPage(pageNumber)
            ? "bg-primary text-black border border-gray-300 rounded-md"
            : "bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-200 dark:border-gray-100 dark:text-black rounded-md"
        }`}
      >
        {pageNumber}
      </a>
    </li>
  );

  const renderPageNumbers = () => {
    const pageNumbers: number[] = [
      currentPage - 1,
      currentPage,
      currentPage + 1,
    ].filter((pageNumber) => pageNumber > 0 && pageNumber <= totalPages);

    return pageNumbers.map(renderPageNumber);
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-8 text-sm justify-center mt-3 gap-1">
        <li>
          <button
            className="text-lg flex items-center justify-center px-2 h-8  dark:bg-gray-200  dark:text-secondary rounded-md hover:bg-gray-100"
            onClick={(event: MouseEvent) => {
              event.preventDefault();
              if (currentPage > 1) {
                onPageChange(currentPage - 1);
              }
            }}
          >
            <IoIosArrowBack />
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            className="text-lg flex items-center justify-center px-2 h-8  dark:bg-gray-200  dark:text-secondary rounded-md hover:bg-gray-100"
            onClick={(event: MouseEvent) => {
              event.preventDefault();
              if (currentPage < totalPages) {
                onPageChange(currentPage + 1);
              }
            }}
          >
            <IoIosArrowForward />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
