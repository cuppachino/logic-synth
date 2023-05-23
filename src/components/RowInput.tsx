import { RowOutput } from "./RowOutput";

export function RowInput(props: {
  permutation: number[];
  rowIndex: number;
  outSize: number;
}) {
  return (
    <tr key={props.rowIndex} className="font-mono">
      {props.permutation.map((bit, bitIndex) => (
        <td
          key={bitIndex}
          className={`border-y border-l border-neutral-600 ${
            !bit ? "text-neutral-500" : ""
          }`}
        >
          {bit}
        </td>
      ))}
      {Array.from({ length: props.outSize }, (_, i) => (
        <td className="border border-neutral-400">
          <RowOutput key={`func-out-${i}`} />
        </td>
      ))}
    </tr>
  );
}
