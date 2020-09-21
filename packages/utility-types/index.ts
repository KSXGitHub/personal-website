/** Type of children item of a React component */
export type Child =
  | Iterable<JSX.Element>
  | JSX.Element
  | Iterable<string>
  | string
