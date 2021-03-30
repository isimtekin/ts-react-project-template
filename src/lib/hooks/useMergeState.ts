import { useState, useCallback } from 'react';

export function useMergeState<T>(
    initialState: T | (() => T)
): [T, (props: T | ((arg0: T) => T)) => void] {
    const [state, setState] = useState(initialState);

    const updateState = useCallback(function (props) {
        setState((state) => {
            if (typeof props === 'function') {
                return {
                    ...state,
                    ...props(state),
                };
            }

            return {
                ...state,
                ...props,
            };
        });
    }, []);

    return [state, updateState];
}
