import {useState, useEffect} from "react";

export function useObserver(observer:any) {
    const [o, set] = useState(observer);

    useEffect(() => {
        observer.connections = observer.connections.filter((connection:any) =>{return  connection !== set});

        if (!observer.connections.includes(set)) {
            observer.connections.push(set);
        }
    }, []);

    return [o.state, observer.set];
};

