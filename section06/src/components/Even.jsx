import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        return () => {
            console.log("unmount");

        };
    }, [])
    return <div>even</div>
}


export default Even;