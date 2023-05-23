import { useState } from "react";

/**
 * Count hook
 */
export const useCount = (min: number, max: number) => {
  const [count, setCount] = useState(min);

  const inc = () => setCount((count) => (count < max ? count + 1 : count));
  const dec = () => setCount((count) => (count > min ? count - 1 : count));
  const set = (count: number) =>
    count >= min && count <= max && setCount(count);

  return [count, inc, dec, set] as const;
};
