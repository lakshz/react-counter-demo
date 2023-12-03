import { memo } from "react";

const CounterButton = memo(function CounterButton({ children, onButtonClick }) {
  console.log("COUNTER BUTTON RENDERED");
  return <button onClick={onButtonClick}>{children}</button>;
});

export default CounterButton;
