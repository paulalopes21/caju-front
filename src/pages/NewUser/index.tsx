import Button from "@/components/Buttons";
import { IconButton } from "@/components/Buttons/IconButton";
import TextField from "@/components/TextField";
import { useAdmission } from "@/context/AdmissionContext";
import routes from "@/router/routes";
import { formatCPF, isValidCPF, sanitizeCPF } from "@/utils/cpfUtils";
import { formatDateToBR } from "@/utils/dateUtils";
import { validateEmail, validateName } from "@/utils/validationUtils";

import { useState } from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import * as S from "./styles";

import { NOTIFICATION_TYPES } from "@/constants/NotificationTypes";
import { useUI } from "@/context/UIContext";

const NewUserPage = () => {
  const { addAdmission, loading } = useAdmission();
  const { showNotification, showConfirmation } = useUI();
  const history = useHistory();
  const goToHome = () => {
    history.push(routes.dashboard);
  };

  const [formData, setFormData] = useState({
    employeeName: "",
    email: "",
    cpf: "",
    admissionDate: "",
  });

  const [errors, setErrors] = useState({
    employeeName: "",
    email: "",
    cpf: "",
    admissionDate: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "cpf" ? formatCPF(value) : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {
      employeeName: validateName(formData.employeeName)
        ? ""
        : "Nome inválido. Use nome completo.",
      email: validateEmail(formData.email) ? "" : "E-mail inválido.",
      cpf: isValidCPF(formData.cpf) ? "" : "CPF inválido.",
      admissionDate: formData.admissionDate
        ? ""
        : "Data de admissão é obrigatória.",
    };
    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleAddAdmission = () => {
    const formattedData = {
      ...formData,
      cpf: sanitizeCPF(formData.cpf),
      admissionDate: formatDateToBR(formData.admissionDate),
    };

    showConfirmation("Confirmar cadastro?", async () => {
      await addAdmission(formattedData);

      showNotification(
        "Admissão criada com sucesso!",
        NOTIFICATION_TYPES.SUCCESS
      );
      setFormData({
        employeeName: "",
        email: "",
        cpf: "",
        admissionDate: "",
      });
      goToHome();
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      handleAddAdmission();
    }
  };

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <S.Form onSubmit={handleSubmit}>
          <TextField
            name="employeeName"
            placeholder="Nome Completo"
            value={formData.employeeName}
            onChange={handleInputChange}
            error={errors.employeeName}
          />
          <TextField
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
          />
          <TextField
            name="cpf"
            placeholder="CPF"
            value={formData.cpf}
            onChange={handleInputChange}
            error={errors.cpf}
            maxLength={14}
          />
          <TextField
            name="admissionDate"
            type="date"
            placeholder="Data de admissão"
            value={formData.admissionDate}
            onChange={handleInputChange}
            error={errors.admissionDate}
          />
          <Button type="submit" disabled={loading}>
            Cadastrar
          </Button>
        </S.Form>
      </S.Card>
    </S.Container>
  );
};

export default NewUserPage;
