function CounterControls({ onIncrement, onDecrement, onReset }) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default CounterControls;
