declare const graphql: (query: TemplateStringsArray) => void;
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
