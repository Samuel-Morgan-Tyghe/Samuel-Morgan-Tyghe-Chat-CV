export function nonNullable<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

type Truthy<T> = T extends false | "" | 0 | null | undefined ? never : T; // from lodash

export function truthy<T>(value: T): value is Truthy<T> {
  return !!value;
}

/**
 * @deprecated use chakra cx instead
 */
export const classNames = (classes: Array<any>) => {
  return classes.filter(Boolean).join(" ");
};

/**
 * Typesafe capitalisation of first letter.
 */
export const capitalise = <T extends string>(string: T) =>
  (string[0].toUpperCase() + string.slice(1)) as Capitalize<typeof string>;
