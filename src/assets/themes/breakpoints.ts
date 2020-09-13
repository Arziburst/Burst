export const breakpoints = {
    up:      (breakpoint: number, vertical: boolean = false) => `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint} + 0.02px))`,
    down:    (breakpoint: number, vertical: boolean = false) => `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint})`,
    between: (breakpointMin: number, breakpointMax: number, vertical: boolean = false) => `@media (max-${vertical ? 'height' : 'width'}: ${breakpointMax}) and (min-${vertical ? 'height' : 'width'}: calc(${breakpointMin} + 0.02px))`,
};
