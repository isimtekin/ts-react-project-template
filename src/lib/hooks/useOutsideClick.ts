import { useEffect, MutableRefObject } from 'react';

/**
 *
 * const ref = React.useRef();
 * useOutsideClick(ref, () => console.log("On click outside"));
 *
 * @param {React.useRef()} ref
 * @param {Function} callback
 */

export function useOutsideClick(
    ref: MutableRefObject<any>,
    callback: () => void
) {
    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        };
    });
}
