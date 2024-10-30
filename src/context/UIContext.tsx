import ConfirmationModal from "@/components/ConfirmationModal";
import Notification from "@/components/Notification";
import {
  NOTIFICATION_TYPES,
  NotificationType,
} from "@/constants/NotificationTypes";
import { createContext, ReactNode, useContext, useState } from "react";

type UIContextData = {
  showModal: (message: string, onConfirm: () => void) => void;
  showNotification: (message: string, type: NotificationType) => void;
  showConfirmation: (message: string, actionFn: () => Promise<void>) => void;
};

const UIContext = createContext<UIContextData | undefined>(undefined);

export const UIProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modal, setModal] = useState<{
    message: string;
    onConfirm: () => void;
  } | null>(null);
  const [notification, setNotification] = useState<{
    message: string;
    type: NotificationType;
  } | null>(null);

  const showModal = (message: string, onConfirm: () => void) => {
    setModal({ message, onConfirm });
  };

  const showNotification = (message: string, type: NotificationType) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const showConfirmation = (message: string, actionFn: () => Promise<void>) => {
    showModal(message, async () => {
      try {
        await actionFn();
        showNotification(
          "Ação realizada com sucesso!",
          NOTIFICATION_TYPES.SUCCESS
        );
      } catch (error) {
        console.error("Erro ao realizar a ação:", error);
        showNotification("Erro ao realizar a ação.", NOTIFICATION_TYPES.ERROR);
      }
    });
  };

  const handleConfirm = () => {
    if (modal?.onConfirm) modal.onConfirm();
    setModal(null);
  };

  return (
    <UIContext.Provider
      value={{ showModal, showNotification, showConfirmation }}
    >
      {children}
      {modal && (
        <ConfirmationModal
          message={modal.message}
          onConfirm={handleConfirm}
          onCancel={() => setModal(null)}
        />
      )}
      {notification && (
        <Notification message={notification.message} type={notification.type} />
      )}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) throw new Error("useUI must be used within a UIProvider");
  return context;
};
