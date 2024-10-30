import Button from "@/components/Buttons";
import { IconButton } from "@/components/Buttons/IconButton";
import TextField from "@/components/TextField";
import { useAdmission } from "@/context/AdmissionContext";
import routes from "@/router/routes";
import { formatCPF, isValidCPF } from "@/utils/cpfUtils";
import { useState } from "react";
import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

export const SearchBar = () => {
  const { fetchAdmissions } = useAdmission();
  const [cpf, setCpf] = useState("");

  const history = useHistory();

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const handleRefetch = () => {
    fetchAdmissions();
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(e.target.value);
    setCpf(formattedCPF);

    if (isValidCPF(formattedCPF)) {
      fetchAdmissionsByCPF(formattedCPF);
    }
  };

  const fetchAdmissionsByCPF = async (cpf: string) => {
    const cleanedCPF = cpf.replace(/\D/g, "");
    fetchAdmissions(`?cpf=${cleanedCPF}`);
  };

  return (
    <S.Container>
      <TextField
        placeholder="Digite um CPF válido"
        value={cpf}
        onChange={handleCPFChange}
        maxLength={14}
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={handleRefetch}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
