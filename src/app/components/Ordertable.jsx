import React from "react";
import { useSelector } from "react-redux";

const Ordertable = ({ _id, productId, userId }) => {
  const { orders } = useSelector((e) => e.orderReducers);
  console.log(orders);
  return (
    <>
      <div className="flex flex-col p-10">
        <span>Order List</span>

        <div class="relative overflow-x-auto">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  id
                </th>
                <th scope="col" class="px-6 py-3">
                  productId
                </th>
                <th scope="col" class="px-6 py-3">
                  userid
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((e) => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td class="px-6 py-4">{(_id = e._id)}</td>
                  <td class="px-6 py-4">{(productId = e.productId)}</td>
                  <td class="px-6 py-4">{(userId = e.userId)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Ordertable;
