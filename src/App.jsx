import { useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../src/features/counter/counterSlice.js";

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
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
