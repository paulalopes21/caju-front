import { AdmissionStatus } from "@/constants/AdmissionStatus";
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
  onUpdateStatus: (id: number, status: AdmissionStatus) => void;
  onDelete: (id: number) => void;
  noResults: boolean;
};

const Collumns: React.FC<Props> = ({
  registrations,
  onUpdateStatus,
  onDelete,
  noResults,
}) => {
  return (
    <S.Container>
      {allColumns.map((collum) => (
        <S.Column status={collum.status} key={collum.title}>
          <S.TitleColumn status={collum.status}>{collum.title}</S.TitleColumn>
          <S.CollumContent>
            {noResults ? (
              <S.NoResult>Nenhum registro encontrado</S.NoResult>
            ) : (
              registrations
                .filter((registration) => registration.status === collum.status)
                .map((registration) => (
                  <RegistrationCard
                    data={registration}
                    key={registration.id}
                    onUpdateStatus={onUpdateStatus}
                    onDelete={onDelete}
                  />
                ))
            )}
          </S.CollumContent>
        </S.Column>
      ))}
    </S.Container>
  );
};
export default Collumns;
