import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid md:grid-cols-2 gap-4">
        {/* Edit Profile */}
        <div className="mobile:col-span-2 lg:col-span-1 flex flex-col items-center justify-center border-2 border-gray-100 p-10 w-full">
          <Image
            src={"/images/products/man.jpg"}
            alt="Description of your image"
            width={80}
            height={80}
            className="ml-2 rounded-full"
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              aspectRatio: "1 / 1",
            }}
          />
          <h2 className="text-secondary text-md font-semibold mt-2">
            Ryan Ford
          </h2>
          <h2 className="text-gray-700 text-sm">red-parts@example.com</h2>
          <button className="h-7 text-sm font-medium bg-primary text-white hover:bg-secondary w-[50%] mt-4 rounded-md ">
            Edit Profile
          </button>
        </div>

        {/* Edit Address */}
        <div className="mobile:col-span-2 lg:col-span-1 flex flex-col items-start border-2 border-gray-100 p-10 w-full">
          <div className="ms-auto inline-flex justify-center bg-red-500 -skew-x-12 pl-2 pr-2 m-1 text-sm text-white">
            DEFAULT
          </div>

          <h2 className="text-secondary text-md font-semibold ">Ryan Ford</h2>
          {/* Address */}
          <div className="mt-3">
            <h3 className="text-xs font-semibold text-gray-400">Address</h3>
            {/* Street Address */}
            <h3 className="text-sm mt-1">No.19/8 3rd lane</h3>
            {/* Street Address */}
            <h3 className="text-sm">Nagoda Rd, Central Junction</h3>
            {/* City */}
            <h3 className="text-sm">Kalutara</h3>
            {/* Postcode */}
            <h3 className="text-sm">12000</h3>
            {/* Country */}
            <h3 className="text-sm">Sri Lanka</h3>
          </div>

          {/* Phone number */}
          <div className="mt-3">
            <h3 className="text-xs font-semibold text-gray-400">
              Phone Number
            </h3>
            {/* Street Address */}
            <h3 className="text-sm mt-1">077456735</h3>
          </div>

          {/* Email */}
          <div className="mt-3">
            <h3 className="text-xs font-semibold text-gray-400">Email</h3>
            {/* Street Address */}
            <h3 className="text-sm mt-1">red-parts@example.com</h3>
          </div>

          <button className="h-7 text-sm font-medium bg-primary text-white hover:bg-secondary w-[50%] mt-4 rounded-md ">
            Edit Address
          </button>
        </div>

        <div className=" col-span-2 relative  overflow-x-auto">
          <h2 className="py-4 text-xl font-semibold">Recent Orders</h2>
          <table className="w-full  text-sm text-left rtl:text-right text-gray-50 dark:text-gray-400">
            <thead className="text-xs  uppercase  dark:bg-gray-100 dark:text-black">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-white  dark:border-gray-300 text-gray-500">
                <td className="px-6 py-4">#9478</td>
                <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2020</td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  $1596.00 for 6 items
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-white  dark:border-gray-300 text-gray-500">
                <td className="px-6 py-4">#9478</td>
                <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2020</td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  $1596.00 for 6 items
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-white  dark:border-gray-300 text-gray-500">
                <td className="px-6 py-4">#9478</td>
                <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2020</td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  $1596.00 for 6 items
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-white  dark:border-gray-300 text-gray-500">
                <td className="px-6 py-4">#9478</td>
                <td className="px-6 py-4 whitespace-nowrap">Oct 19, 2020</td>
                <td className="px-6 py-4">Pending</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  $1596.00 for 6 items
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
