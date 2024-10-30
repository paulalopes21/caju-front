import styled from "styled-components";

type ConfirmationModalProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  text-align: center;
`;

const Button = styled.button`
  margin: 0 10px;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const ConfirmButton = styled(Button)`
  background-color: #4caf50;
  color: white;
`;

const CancelButton = styled(Button)`
  background-color: #f44336;
  color: white;
`;

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Overlay>
      <ModalContent>
        <p>{message}</p>
        <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
        <CancelButton onClick={onCancel}>Cancelar</CancelButton>
      </ModalContent>
    </Overlay>
  );
};

export default ConfirmationModal;
