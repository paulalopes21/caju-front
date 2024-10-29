import Button from "@/components/Buttons";
import { IconButton } from "@/components/Buttons/IconButton";
import TextField from "@/components/TextField";
import { useAdmission } from "@/context/AdmissionContext";
import routes from "@/router/routes";
import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

export const SearchBar = () => {
  const { fetchAdmissions } = useAdmission();

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleRefetch = () => {
    fetchAdmissions();
  };

  return (
    <S.Container>
      <TextField placeholder="Digite um CPF válido" />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
