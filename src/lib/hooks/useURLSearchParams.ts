import { useHistory, useLocation } from 'react-router-dom';

export function useURLSearchParams() {
    const { search, pathname } = useLocation();
    const history = useHistory();
    const searchParams = new URLSearchParams(search);
    const queryObject: any = {};

    searchParams.forEach((value, key) => {
        queryObject[key] = value;
    });

    function changeQuery(args: PartialRecord<any, any>): void {
        if (args) {
            Object.keys(args).forEach((key) => {
                searchParams.set(key, args[key]);
            });

            history.push(`${pathname}?${searchParams.toString()}`);
        }
    }

    function deleteQuery(keys: string | string[]) {
        if (Array.isArray(keys)) {
            keys.forEach((key) => {
                searchParams.delete(key);
            });
        }

        history.push(`${pathname}?${searchParams.toString()}`);
    }

    return [queryObject, changeQuery, deleteQuery];
}
