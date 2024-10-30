import {
  NOTIFICATION_TYPES,
  NotificationType,
} from "@/constants/NotificationTypes";
import styled, { keyframes } from "styled-components";

type NotificationProps = {
  message: string;
  type: NotificationType;
};

const slideIn = keyframes`
  from { transform: translateY(100px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const NotificationWrapper = styled.div<{ type: NotificationType }>`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px 24px;
  background-color: ${({ type }) =>
    type === NOTIFICATION_TYPES.SUCCESS ? "#4caf50" : "#f44336"};
  color: white;
  border-radius: 8px;
  animation: ${slideIn} 0.3s ease;
  z-index: 1000;
`;

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  return <NotificationWrapper type={type}>{message}</NotificationWrapper>;
};

export default Notification;
