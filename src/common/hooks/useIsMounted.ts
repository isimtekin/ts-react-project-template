import { useEffect } from 'react';

export default function useIsMounted(mounted?: Function, unmounted?: Function) {
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
