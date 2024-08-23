import { useState } from "react";
import Props from "./Props";

function App() {
  // use state hook
  let [counter, setCounter] = useState(15);
  let [message, setMessage] = useState("");

  const addValue = () => {
    let add = counter + 1;
    if (add <= 20) {
      setCounter(add);
    }
  };

  const removeValue = () => {
    let remove = counter - 1;
    if (remove >= 0) {
      setCounter(remove);
    }
  };

  // 2500 job ready program

  // For props we can pass object

  let myArr = {
    firstName: "Praman",
    lastName: "Ghimire",
    age: 25,
    job: "Web Developer",
    language: "React and Laravel",
  };
  return (
    <>
      <div className="flex items-center justify-center flex-col h-[100vh] w-full bg-gray-600">
        <div className="text-white">
          <h1>React Hooks</h1>
          <h2>Counter Value: {counter}</h2>
          <h2 className="">{message}</h2>
          <button
            onClick={addValue}
            className="bg-green-500 text-white text-sm p-1 rounded"
          >
            Add Value
          </button>
          <button
            onClick={removeValue}
            className="ml-1 bg-red-500 text-white text-sm p-1 rounded"
          >
            Remove Value
          </button>
        </div>
      </div>

      <div className="flex">
        <button className="">TO DO LIST</button>
      </div>

      <Props arr={myArr} />
    </>
  );
}
export default App;
