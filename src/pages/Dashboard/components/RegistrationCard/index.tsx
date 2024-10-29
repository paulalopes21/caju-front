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
};

const renderActionButtons = (status: AdmissionStatus) => {
  switch (status) {
    case ADMISSION_STATUS.REVIEW:
      return (
        <>
          <ButtonSmall bgcolor="rgb(255, 145, 154)">Reprovar</ButtonSmall>
          <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
        </>
      );
    case ADMISSION_STATUS.REPROVED:
    case ADMISSION_STATUS.APPROVED:
      return <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>;
    default:
      return null;
  }
};

const RegistrationCard: React.FC<Props> = ({ data }) => {
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
        {renderActionButtons(data.status)}
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
