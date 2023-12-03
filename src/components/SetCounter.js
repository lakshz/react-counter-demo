import { useState } from "react";

const SetCounter = ({ onSet }) => {
  const [enteredCount, setEnteredCount] = useState(0);

  const handleEnteredCountChange = (event) => {
    setEnteredCount(event.target.value);
  };

  return (
    <div>
      <input
        type="number"
        value={enteredCount}
        onChange={handleEnteredCountChange}
      />
      <button onClick={() => onSet(enteredCount)}>Set</button>
    </div>
  );
};

export default SetCounter;
