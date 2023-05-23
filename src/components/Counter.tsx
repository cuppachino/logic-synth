export function Counter({
  count,
  min,
  max,
  increment,
  decrement,
}: {
  count: number;
  increment: () => void;
  decrement: () => void;
  min: number;
  max: number;
}) {
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-1.5 font-mono">
      <button
        onClick={decrement}
        className={`px-3 py-1 font-extrabold
                         bg-neutral-400 text-black rounded transition-all duration-100
                         ${
                           count === min
                             ? "opacity-50 cursor-not-allowed"
                             : `hover:bg-teal-400 hover:text-neutral-100 hover:rounded-none
                              active:bg-teal-600 active:text-neutral-200 active:rounded-sm`
                         }
      `}
      >
        -
      </button>
      <span className="text-lg font-medium">{count}</span>
      <button
        onClick={increment}
        className={`px-3 py-1 font-extrabold
                         bg-neutral-400 text-black rounded transition-all duration-100
                         ${
                           count === max
                             ? "opacity-50 cursor-not-allowed"
                             : `hover:bg-teal-400 hover:text-neutral-100 hover:rounded-none 
                          active:bg-teal-600 active:text-neutral-200 active:rounded-sm`
                         }
      `}
      >
        +
      </button>
    </div>
  );
}
