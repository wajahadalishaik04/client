import React from 'react';
import { useSelector } from 'react-redux';
const ProductTable = ({ title, description, price }) => {
  const {products} = useSelector((e)=>e.productReducers)
  return (
    <div className="flex flex-col p-10">
      <span>Product List</span>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((e, index) => (
              <tr key={index}>
                <td className="px-6 py-3">
                  {title=e.title}
                </td>
                <td className="px-6 py-3">
                {description=e.description}
                </td>
                <td className="px-6 py-3">
                  {price=e.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;