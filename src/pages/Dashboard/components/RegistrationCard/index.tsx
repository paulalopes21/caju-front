import { ButtonSmall } from "@/components/Buttons";
import { ADMISSION_STATUS, AdmissionStatus } from "@/constants/AdmissionStatus";
import { Admission } from "@/types/Admission";

import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi";
import * as S from "./styles";

type Props = {
  data: Admission;
  onUpdateStatus: (id: number, status: AdmissionStatus) => void;
  onDelete: (id: number) => void;
};

const RegistrationCard: React.FC<Props> = ({
  data,
  onUpdateStatus,
  onDelete,
}) => {
  const renderActionButtons = (
    status: Admission["status"],
    id: number,
    onUpdateStatus: Props["onUpdateStatus"]
  ) => {
    switch (status) {
      case ADMISSION_STATUS.REVIEW:
        return (
          <>
            <ButtonSmall
              bgcolor="rgb(255, 145, 154)"
              onClick={() => onUpdateStatus(id, ADMISSION_STATUS.REPROVED)}
            >
              Reprovar
            </ButtonSmall>
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() => onUpdateStatus(id, ADMISSION_STATUS.APPROVED)}
            >
              Aprovar
            </ButtonSmall>
          </>
        );
      case ADMISSION_STATUS.REPROVED:
      case ADMISSION_STATUS.APPROVED:
        return (
          <ButtonSmall
            bgcolor="#ff8858"
            onClick={() => onUpdateStatus(id, ADMISSION_STATUS.REVIEW)}
          >
            Revisar novamente
          </ButtonSmall>
        );
      default:
        return null;
    }
  };

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {renderActionButtons(data.status, data.id, onUpdateStatus)}
        <HiOutlineTrash onClick={() => onDelete(data.id)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
