import "./App.css";
import { TruthTable } from "./components/TruthTable";
import { useCount } from "./hooks/useCount";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div className="space-y-8">
      <h1 className="">Logic Synthesizer</h1>
      <LogicSynthesizer />
    </div>
  );
}

export function LogicSynthesizer({
  maxSize = 8,
  maxOutSize = 16,
}: {
  maxSize?: number;
  maxOutSize?: number;
}) {
  const [size, inc, dec] = useCount(1, maxSize);
  const [outSize, incOut, decOut] = useCount(1, maxOutSize);

  return (
    <div
      className="flex flex-col container mx-auto items-center p-5 
                 rounded-xl border border-neutral-700
                 space-y-3 relative overflow-auto"
    >
      <h2 className="">T</h2>

      <div className="flex justify-evenly gap-4">
        <Counter
          count={size}
          increment={inc}
          decrement={dec}
          min={1}
          max={maxSize}
        />
        <Counter
          count={outSize}
          increment={incOut}
          decrement={decOut}
          min={1}
          max={maxOutSize}
        />
      </div>

      <TruthTable size={size} outSize={outSize} />
    </div>
  );
}
