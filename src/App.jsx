import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import Header from "./components/Header.jsx";
import AddProducts from "./components/AddProducts.jsx";
import DisplayCart from "./components/DisplayCart.jsx";
import UserForm from "./components/UserForm";
import { finishOrder } from "./features/order/finishOrderSlice.js";
function App() {
  let submitOrder = useSelector((state) => state.order.value);
  useEffect(() => {
    // const fetchDataNet = async () => {
    //   try {
    //     const response = await fetch("/api/v2/details", {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({ name: "John", age: 30 }),
    //     });
    //     console.log("responsev2", response);
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error("Error fetching categories:", error);
    //   }
    // };
  }, []);
  return (
    <div>
      <Grid container flexDirection={"column"}>
        <Header />
        {submitOrder ? (
          <UserForm />
        ) : (
          <>
            <AddProducts />
            <DisplayCart />
          </>
        )}
      </Grid>
    </div>
  );
}

export default App;
