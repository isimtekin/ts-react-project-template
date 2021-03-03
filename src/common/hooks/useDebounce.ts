import { useEffect, useState } from 'react';

export default function useDebounce(
    value: any | any[],
    delay: number
): any | any[] {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(
        () => {
            const timeout = setTimeout(() => {
                setDebouncedValue(value);
            }, delay);

            return () => {
                clearTimeout(timeout);
            };
        },
        Array.isArray(value) ? value : [value]
    );

    return debouncedValue;
}
