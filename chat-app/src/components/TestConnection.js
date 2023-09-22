import React, { useState } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { v4 as uuidv4 } from "uuid";

var stompClient = null;
const TestConnection = () => {
  const [userData, setUserData] = useState({
    userid: "",
    connected: false,
  });

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    let cid = uuidv4();
    setUserData({ userid: cid, connected: true });

    const message = {
      specialId: cid,
    };

    stompClient.send("/app/id", {}, JSON.stringify(message));
    stompClient.subscribe("/id-receive/" + userData.userid, onReceiving);
  };

  const onError = (err) => {
    console.log(err);
  };

  const goconnection = () => {
    connect();
  };

  const onReceiving = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log("message from server:", payloadData.specialId);
  };

  return (
    <div>
      {userData.connected ? (
        <div>
          <h3>{userData.userid} -- hello !</h3>
        </div>
      ) : (
        <div>
          <button type="button" onClick={goconnection}>
            click to connect to server
          </button>
        </div>
      )}
    </div>
  );
};

export default TestConnection;
