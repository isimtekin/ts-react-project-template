type PartialRecord<K extends string | number | symbol, T> = {
    [P in K]?: T;
};

// declare module 'react' {
//     interface DOMAttributes<T> {
//         css?: InterpolationWithTheme<any>;
//     }
// }
