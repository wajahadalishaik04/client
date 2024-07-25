import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Ordertable from "../components/Ordertable";
import { create_order, fetch_orders } from "../../store/actions";


const Home = () => {

  const [data, setData] = useState([]);
  const [_id, setId] = useState("");
  const [userId, setuserId] = useState("");
  const [productId, setproductId] = useState("");
  const { orders } = useSelector((e) => e.orderReducers);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const fetch_create_order = await create_order();
      console.log(fetch_create_order);
      console.log(_id, userId, productId);
      alert("Order Created Successfully");
      fetch_order_Data_Table();
    } catch (error) {
      console.log(error);
    }
  };
  const fetch_order_Data_Table = async () => {
    const fetch_order_data = await fetch_orders();
    setData(fetch_order_data);
    dispatch({ type: "orderReducers", payload: fetch_order_data });
  };

  useEffect(() => {
    if (orders?.length <= 0) {
      fetch_order_Data_Table();
    } else {
      setData(orders);
    }
  }, [orders]);

  return (
    <>
      <div className="flex justify-center bg-slate-800 items-center w-full h-screen">
        <div>
          <form
            onSubmit={handleSubmit}
            class="max-w-sm mx-auto bg-gray-600  p-10"
          >
            <div class="mb-5">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                _id
              </label>
              <input
                onChange={(e) => {
                  setId(e.target.value);
                }}
                type="text"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                userId
              </label>
              <input
                onChange={(e) => {
                  setuserId(e.target.value);
                }}
                type="text"
                id="des"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div class="mb-5">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                productId
              </label>
              <input
                onChange={(e) => {
                  setproductId(e.target.value);
                }}
                type="number"
                id="price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Ordertable orders={data} />
    </>
  );
};

export default Home;
