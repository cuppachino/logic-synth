import { useMemo } from "react";
import { Positive } from "../types/Positive";
import { permutations } from "../utils/permutations";
import { RowInput } from "./RowInput";

export function TruthTable<Size extends number, OutSize extends number>(props: {
  size: Positive<Size>;
  outSize?: Positive<OutSize>;
}) {
  const bits = useMemo(() => permutations(props.size), [props.size]);

  return (
    <table className="border-collapse border border-neutral-400 text-xs sm:text-sm md:text-base">
      <thead>
        <tr>
          {[...Array(props.size as number).keys()].map((i) => (
            <th
              key={`bit-h-${i}`}
              className="border border-neutral-400 px-1 md:px-2 py-2 font-bold md:text-sm text-neutral-100"
            >
              {String.fromCharCode(i + 65).toLowerCase()}
            </th>
          ))}
          {[...Array(props.outSize as number).keys()].map((i) => (
            <th
              className="border border-neutral-400 px-1 md:px-2 py-2 text-teal-300/95 font-semibold"
              key={`bit-h-${i}`}
            >
              {String.fromCharCode(i + 65)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {bits.map((bit, i) => (
          <RowInput
            key={`bit-h-${i}`}
            permutation={bit}
            rowIndex={i}
            outSize={props.outSize || 1}
          />
        ))}
      </tbody>
    </table>
  );
}
