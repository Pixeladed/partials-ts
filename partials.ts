/**
 * Produces type T where property K is required
 */
export type PartialRequired<T, K extends keyof T> = T & Pick<Required<T>, K>

/**
 * Produces type T where property K is optional
 */
export type PartialOptional<T, K extends keyof T> = Partial<T> & Pick<T, Exclude<keyof T, K>>
