import { useMemo, useState } from "react";
import "./App.css";

type TypeErr<T> = T & { _?: never };
// eslint-disable-next-line @typescript-eslint/no-unused-vars
type IsPositive<T extends number> = `${T}` extends `-${infer _}` ? false : true;
type PositiveNumber<T extends number> = IsPositive<T> extends true
  ? T
  : TypeErr<"must be a positive number">;

export default function App() {
  return (
    <div className="space-y-8">
      <h1 className="">logi-synth</h1>
      <LogicSynthesizer />
    </div>
  );
}

export function LogicSynthesizer() {
  const [size, _setSize] = useState(4);

  const decrement = () => {
    _setSize((size) => {
      if (size > 1) {
        return size - 1;
      } else return size;
    });
  };

  const increment = () => {
    _setSize((size) => {
      if (size < 8) {
        return size + 1;
      } else return size;
    });
  };

  return (
    <div
      className="flex flex-col container mx-auto items-start p-5 
                 rounded-xl border border-neutral-700
                 space-y-3
                 "
    >
      <h2 className="">T0</h2>

      <br />

      <button
        className="border-2 border-neutral-600 hover:border-neutral-400"
        onClick={decrement}
      >
        Decrement
      </button>
      <button
        className="border-2 border-neutral-600 hover:border-neutral-400"
        onClick={increment}
      >
        Increment
      </button>

      <TruthTable size={size} />
    </div>
  );
}

export function TruthTable<Size extends number>(props: {
  size: PositiveNumber<Size>;
}) {
  const bits = useMemo(() => permutations(props.size), [props.size]);

  return (
    <table className="border-collapse border border-neutral-400">
      <thead>
        <tr>
          {[...Array(props.size as number).keys()].map((index) => (
            <th key={index} className="border border-neutral-400 p-2">
              Bit {String.fromCharCode(index + 65)}
              {/* Bit {String.fromCharCode((props.size as number) - index - 1 + 65)} */}
            </th>
          ))}
          <th className="border border-neutral-400 p-2 text-lime-400/95">
            Function
            {/* Bit {String.fromCharCode((props.size as number) - index - 1 + 65)} */}
          </th>
        </tr>
      </thead>
      <tbody>
        {bits.map((bit, i) => (
          <Item permutation={bit} rowIndex={i} />
        ))}
      </tbody>
    </table>
  );
}

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
      className={
        state === null
          ? "text-neutral-300/50"
          : state === 0
          ? "text-amber-400/95"
          : "text-teal-400"
      }
      onClick={() => setState((state) => toggleBit(state))}
    >
      {state === 0 && "0"}
      {state === 1 && "1"}
      {state === null && "None"}
    </button>
  );
}

export function Item(props: { permutation: number[]; rowIndex: number }) {
  return (
    <tr key={props.rowIndex}>
      {props.permutation.map((bit, bitIndex) => (
        <td key={bitIndex} className="border-y border-l p-2 border-neutral-600">
          {bit}
        </td>
      ))}
      <td className="border p-2 border-neutral-400">
        <RowOutput />
      </td>
    </tr>
  );
}

/**
 * Generates a grid of all possible permutations of n bits ( 0 or 1 )
 * @param n number of bits
 * @returns a grid of all possible permutations of n bits.
 */
function permutations<N extends number>(n: PositiveNumber<N>) {
  const permutations = [];
  for (let i = 0; i < Math.pow(2, n as number); i++) {
    const permutation = [];
    for (let j = 0; j < (n as number); j++) {
      permutation.push((i >> j) & 1);
    }
    permutations.push(permutation.reverse());
  }
  return permutations;
}
