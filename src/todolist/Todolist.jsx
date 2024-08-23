import React from "react";

const Todolist = () => {
  return (
    <div className="h-[100vh] w-screen bg-green-100 bg-opacity flex items-center justify-center">
      <div className=" rounded-lg shadow-2xl h-[75vh] w-[50vw] flex justify-center border-white shadow-red-400 bg-white-300">
        <div className="shadow-lg p-6 bg-red-400 w-[30vw] flex flex-col space-y-8 p-8 m-8 bg-yellow-500">
          <div>
            <h1 className="font-serif text-white text-2xl font-extrabold mt-4 text-center">
              To DO LIST
            </h1>
          </div>
          <div className="">
            <input type="text" />
            <button>Click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
