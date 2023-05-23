// eslint-disable-next-line @typescript-eslint/no-unused-vars
export type Positive<N extends number> =
  `${N}` extends `-${infer _D extends number}` ? never : N;
