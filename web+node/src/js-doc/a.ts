type Box<T> = { t: T };
/** @see Box for implementation details */
type Boxify<T> = { [K in keyof T]: Box<T> };
