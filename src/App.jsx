import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(5);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);

  useEffect(() => {
    generatePassword();
  }, [length]);

  function includeNumbers(e) {
    setNumber(e.target.checked);
  }
  function includeSymbols(e) {
    setSymbol(e.target.checked);
  }

  function generatePassword() {
    let password = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) {
      characters += "0123456789";
    }
    if (symbol) {
      characters += "!@#$%^&*()";
    }
    for (let i = 0; i < length; i++) {
      let randomNumber = Math.floor(Math.random() * characters.length);
      let char = characters.charAt(randomNumber);
      password += char;
    }
    setPassword(password);
  }

  return (
    <>
      <p className="text-3xl ml-5">{password}</p>
      <label className="ml-5" htmlFor="length">
        {length}
      </label>
      <input
        className="ml-5"
        type="range"
        id="length"
        min={5}
        max={30}
        onChange={(e) => setLength(e.target.value)}
        value={length}
      />
      <br />
      <label className="ml-5" htmlFor="number">
        Number
      </label>
      <input type="checkbox" id="number" onChange={includeNumbers} />
      <br />
      <label className="ml-5" htmlFor="symbol">
        Symbol
      </label>
      <input type="checkbox" id="symbol" onChange={includeSymbols} />
    </>
  );
};

export default App;
