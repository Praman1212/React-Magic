import { useState } from "react";

function App() {
  // use state hook
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter+1);
  };

  const removeValue = () => {
    setCounter(counter-1);
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col h-[100vh] w-full bg-gray-600">
        <div className="text-white">
          <h1>React Hooks</h1>
          <h2>Counter Value: {counter}</h2>
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
    </>
  );
}

export default App;
