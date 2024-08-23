import React, { useState, useCallback, useEffect, useRef } from "react";

function PassGen() {
  let [length, setLength] = useState(8);
  let [numberAllow, setNumberAllow] = useState(false);
  let [characterAllow, setCharacterAllow] = useState(false);
  let [password, setPassword] = useState("");

//  useref hook
let passwordRef = useRef(null);

  //   start of callback function
  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (characterAllow) str += "!`~,<.>/?;:'|[{]}()-_=+*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);

  }, [length, numberAllow, characterAllow, setPassword]);
  // End of callback function

//   start of useRef hook
let copyPasswordToClipboard = useCallback(()=>{
    window.navigator.clipboard.writeText(password);
},[password])

//   Start of useEffect hook
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllow, characterAllow, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-4 my-2 text-orange-500 bg-gray-900">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-0.5 "
          onClick={copyPasswordToClipboard}>
            Copy
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllow}
              id="numberInput"
              onClick={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
          </div>
          <label>Numbers</label>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={characterAllow}
              id="numberInput"
              onClick={() => {
                setCharacterAllow((prev) => !prev);
              }}
            />
          </div>
          <label>Characters</label>
        </div>
      </div>
    </>
  );
}

export default PassGen;
