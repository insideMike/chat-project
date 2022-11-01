import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faVideo,
  faUserPlus,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <FontAwesomeIcon className="icon" icon={faVideo} />
          <FontAwesomeIcon className="icon" icon={faUserPlus} />
          <FontAwesomeIcon className="icon" icon={faEllipsis} />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
