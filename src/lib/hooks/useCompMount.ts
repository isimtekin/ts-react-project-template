import { useEffect } from 'react';

export function useCompMount(mounted?: Function, unmounted?: Function) {
    useEffect(() => {
        if (mounted) {
            mounted();
        }
        return () => {
            if (unmounted) {
                unmounted();
            }
        };
    }, []);
}
