import {useState, useEffect} from "react";

const OnlineStatus = () => {
const [isOnline, setIsOnline] = useState(navigator.onLine);

useEffect(() => {
    const handler = () => setIsOnline(navigator.onLine);

    window.addEventListener('online', handler);
    window.addEventListener('offline', handler);

    return () => {
        window.removeEventListener('offline', handler);
        window.removeEventListener('online', handler);
    }


}, [])

    return (
    <>
            <div className={`text-white text-center mt-12 mx-4 p-4 rounded  ${isOnline ? "bg-green-500" : "bg-red-500"}
            
            `}>

            {isOnline ? "You are online" : "You are offline"}

        </div>

    </>
    )
}


export default OnlineStatus;