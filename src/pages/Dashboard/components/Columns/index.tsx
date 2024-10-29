import { Admission } from "@/types/Admission";
import RegistrationCard from "../RegistrationCard";
import * as S from "./styles";

const allColumns = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
];

type Props = {
  registrations: Admission[];
};

const Collumns: React.FC<Props> = ({ registrations }) => {
  return (
    <S.Container>
      {allColumns.map((collum) => (
        <S.Column status={collum.status} key={collum.title}>
          <S.TitleColumn status={collum.status}>{collum.title}</S.TitleColumn>
          <S.CollumContent>
            {registrations
              .filter((registration) => registration.status === collum.status)
              .map((registration) => (
                <RegistrationCard data={registration} key={registration.id} />
              ))}
          </S.CollumContent>
        </S.Column>
      ))}
    </S.Container>
  );
};
export default Collumns;
