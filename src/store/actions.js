import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

// login user api
export const loginUser = async (data, dispatch) => {
  try {
    dispatch({ type: "startLoading" });
    const { email, password } = data;
    if (!email || !password) {
      alert("Please fill the details");
      return;
    }

    const response = await axios.post(
      "https://ecom-v1-api.onrender.com/api/v1/login",
      data
    );
    console.log(response.data);
    toast.success("logged in successfully");
    dispatch({ type: "userSuccessLogin", payload: response.data });
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

// register user api
export const signUpUser = async (data, dispatch, redirectLogin) => {
  try {
    dispatch({ type: "startLoading" });
    const { email, password, name } = data;
    if (!email || !password || !name) {
      alert("Please fill the details");
      return;
    }

    const response = await axios.post(
      "https://ecom-v1-api.onrender.com/api/v1/signup",
      data
    );
    console.log(response.data);
    toast.success(response.data.message);
    redirectLogin();
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.message || "something went wrong");
  } finally {
    dispatch({ type: "stopLoading" });
  }
};

//postmethod: create product api on home
export const create_products = async () => {
  try {
    const create_products_data = await axios.post(
      "https://ecom-v1-api.onrender.com/api/v1/product",
      { title, description, price },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTk4ZTAzNWVjM2I1ZDZlMjMxZGQwMiIsImlhdCI6MTcyMTM0OTcyMH0.k0pc2GVzWre2kXONzI9cWEbi3wRYfdmT8VoreEeqDgY",
        },
      }
    );
    console.log(create_products_data.data.product);
  } catch (error) {
    console.log(error);
  }
};

// get product data api on  table
export const fetch_products = async () => {
  try {
    const fetch_Products_Data = await axios.get(
      "https://ecom-v1-api.onrender.com/api/v1/products",
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTk4ZTAzNWVjM2I1ZDZlMjMxZGQwMiIsImlhdCI6MTcyMTM0OTcyMH0.k0pc2GVzWre2kXONzI9cWEbi3wRYfdmT8VoreEeqDgY",
        },
      }
    );
    console.log(fetch_Products_Data.data.products);
  } catch (error) {
    console.log(error);
  }
};

export const create_order = async () => {
  try {
    const create_order_data = await axios.post(
      "https://ecom-v1-api.onrender.com/api/v1/order/6699ba56d88f44fb0958897e",
      { _id, userId, productId },
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTk4ZTAzNWVjM2I1ZDZlMjMxZGQwMiIsImlhdCI6MTcyMTM0OTcyMH0.k0pc2GVzWre2kXONzI9cWEbi3wRYfdmT8VoreEeqDgY",
        },
      }
    );
    console.log(create_order_data.data.order);
  } catch (error) {
    console.log(error);
  }
};

// fetch order  data api on  table

export const fetch_orders = async () => {
  try {
    const Fetch_Order_Data = await axios.get(
      "https://ecom-v1-api.onrender.com/api/v1/orders",
      {
        headers: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OTk4ZTAzNWVjM2I1ZDZlMjMxZGQwMiIsImlhdCI6MTcyMTM0OTcyMH0.k0pc2GVzWre2kXONzI9cWEbi3wRYfdmT8VoreEeqDgY",
        },
      }
    );
    console.log(Fetch_Order_Data.data.orders);
    return Fetch_Order_Data.data.orders;
    
  } catch (error) {
    console.log(error);
  }
};
