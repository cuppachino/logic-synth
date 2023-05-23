import { useMemo } from "react";
import { Positive } from "../types/Positive";
import { permutations } from "../utils/permutations";
import { RowInput } from "./RowInput";

export function TruthTable<Size extends number>(props: {
  size: Positive<Size>;
}) {
  const bits = useMemo(() => permutations(props.size), [props.size]);

  return (
    <table className="border-collapse border border-neutral-400">
      <thead>
        <tr>
          {[...Array(props.size as number).keys()].map((i) => (
            <th
              key={`bit-h-${i}`}
              className="border border-neutral-400 p-2 font-bold text-sm text-neutral-100"
            >
              Bit {String.fromCharCode(i + 65)}
            </th>
          ))}
          <th className="border border-neutral-400 p-2 text-teal-300/95 font-semibold">
            Function
          </th>
        </tr>
      </thead>
      <tbody>
        {bits.map((bit, i) => (
          <RowInput key={`bit-h-${i}`} permutation={bit} rowIndex={i} />
        ))}
      </tbody>
    </table>
  );
}
