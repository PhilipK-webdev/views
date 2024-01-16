import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../src/features/counter/counterSlice.js";
import Grid from "@mui/material/Grid";
import Header from "./components/Header.jsx";
import AddProducts from "./components/AddProducts.jsx";
import RtlTextField from "./components/Test.jsx";
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/v1/categories");
        console.log("responsev1", response);
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
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

    fetchData();
    // fetchDataNet();
  }, []);
  return (
    <div>
      <Grid container flexDirection={"column"}>
        <Header />
        <AddProducts />
      </Grid>
    </div>
  );
}

export default App;
