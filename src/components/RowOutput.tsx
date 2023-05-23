import { useState } from "react";

const toggleBit = (state: 0 | 1 | null) => {
  switch (state) {
    case 0:
      return 1;
    case 1:
      return null;
    case null:
      return 0;
  }
};

export function RowOutput() {
  const [state, setState] = useState<0 | 1 | null>(0);

  return (
    <button
      className={`w-full h-full p-1
        ${
          state === null
            ? "text-neutral-300/50"
            : state === 0
            ? "text-amber-400/95"
            : "text-teal-400"
        }`}
      onClick={() => setState((state) => toggleBit(state))}
    >
      {state === 0 && "0"}
      {state === 1 && "1"}
      {state === null && "None"}
    </button>
  );
}
