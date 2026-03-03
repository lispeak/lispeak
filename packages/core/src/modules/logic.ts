export const da = true;
export const tu = false;

// not
export const i = (x: boolean) => !x;

// and
export const ye = (...xs: boolean[]) => xs.every((x) => x);

// or
export const yo = (...xs: boolean[]) => xs.some((x) => x);
