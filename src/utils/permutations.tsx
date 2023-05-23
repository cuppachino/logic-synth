import type { Positive } from "../types/Positive";

/**
 * Generates a grid of all possible permutations of n bits ( 0 or 1 )
 * @param n number of bits
 * @returns a grid of all possible permutations of n bits.
 */
export function permutations<N extends number>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  n: Positive<N>
) {
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
