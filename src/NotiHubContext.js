import React, { useContext, useEffect, useState } from "react";
import * as signalR from '@microsoft/signalr';


const MessageContext = React.createContext();
const StopNotiContext = React.createContext();

export function useGetMessage() {
    return useContext(MessageContext);
}

export function useStopNoti() {
    return useContext(StopNotiContext);
}



export function NotiProvider({ children }) {
    const [notiHub, setNotiHub] = useState({});
    const [bikesFromMessage, setBikesFromMessage] = useState([]);
    const stopNoti = () => {
        notiHub.stop();
    }
    const hubConnection = new signalR.HubConnectionBuilder().withUrl('https://localhost:44321/api/admin/bikes/noti')
        .configureLogging(signalR.LogLevel.Information)
        .build();

    hubConnection.start().then(() => console.log(hubConnection?.state))
        .catch(error => console.log('Error establishing connection: ', error));

    setNotiHub(hubConnection);
    useEffect(()=>{
        var bikes = [];
        hubConnection.on("ReiceiveBikes", bike => bikes.push(bike));
        setBikesFromMessage(bikes);
    },[hubConnection])

    return (
        <MessageContext.Provider value={bikesFromMessage}>
            <StopNotiContext.Provider value={stopNoti}>
                {children}
            </StopNotiContext.Provider>
        </MessageContext.Provider>
    );

}
