import React, { useState, useCallback } from "react";

import Counter from "./components/Counter";
import CounterButton from "./components/CounterButton";
import SetCounter from "./components/SetCounter";

function App() {
  console.log("APP RENDERED");
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  const handleSetCount = (newCount) => {
    setCount(newCount);
  };

  return (
    <div>
      <Counter count={count} />
      <CounterButton onButtonClick={handleIncrement}>Increase</CounterButton>
      <CounterButton onButtonClick={handleDecrement}>Decrease</CounterButton>
      <SetCounter onSet={handleSetCount} />

      <SetCounter onSet={handleSetCount} />
    </div>
  );
}

export default App;
