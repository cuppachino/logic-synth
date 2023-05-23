import React, { useState } from "react";

interface PermutationsTableProps {
  n: number;
}

const PermutationsTable: React.FC<PermutationsTableProps> = ({ n }) => {
  const [permutations, setPermutations] = useState<number[][]>(
    generatePermutations(n)
  );

  const toggleBit = (rowIndex: number, bitIndex: number) => {
    const newPermutations = [...permutations];
    const bitValue = newPermutations[rowIndex][bitIndex];
    if (bitValue === 0) {
      newPermutations[rowIndex][bitIndex] = 1;
    } else if (bitValue === 1) {
      newPermutations[rowIndex][bitIndex] = 2;
    } else {
      newPermutations[rowIndex][bitIndex] = 0;
    }
    setPermutations(newPermutations);
  };

  function generatePermutations(n: number) {
    const permutations: number[][] = [];
    for (let i = 0; i < Math.pow(2, n); i++) {
      const permutation: number[] = [];
      for (let j = 0; j < n; j++) {
        permutation.push((i >> j) & 1);
      }
      permutations.push(permutation.reverse());
    }
    return permutations;
  }

  return (
    <table className="border-collapse border">
      <thead>
        <tr>
          {[...Array(n).keys()].map((index) => (
            <th key={index} className="border p-2">
              Bit {n - index - 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {permutations.map((permutation, rowIndex) => (
          <tr key={rowIndex}>
            {permutation.map((bit, bitIndex) => (
              <td key={bitIndex} className="border p-2">
                <button
                  className="toggle-button"
                  onClick={() => toggleBit(rowIndex, bitIndex)}
                >
                  {bit === 0 && "0"}
                  {bit === 1 && "1"}
                  {bit === null && "None"}
                </button>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PermutationsTable;
