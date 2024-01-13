import { useEffect, useState } from "react";
import { Observable } from "rxjs";

export const useObservable = <T>(observable: Observable<T>, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(defaultValue);
    useEffect(() => {
        let sub = observable.subscribe((value: T) => {
            setValue(value);
        });
        return () => sub.unsubscribe();
    }, [observable, setValue]);
    return [value, setValue];
};