import "./App.css";
import { TruthTable } from "./components/TruthTable";
import { useCount } from "./hooks/useCount";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <div className="space-y-8">
      <h1 className="">logi-synth</h1>
      <LogicSynthesizer />
    </div>
  );
}

export function LogicSynthesizer() {
  const [size, inc, dec] = useCount(1, 8);

  return (
    <div
      className="flex flex-col container mx-auto items-start p-5 
                 rounded-xl border border-neutral-700
                 space-y-3"
    >
      <h2 className="">T</h2>

      <br />

      <Counter count={size} increment={inc} decrement={dec} min={1} max={8} />
      <TruthTable size={size} />
    </div>
  );
}
