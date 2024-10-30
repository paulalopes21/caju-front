import LoadingSpinner from "@/components/LoadingSpinner";
import { AdmissionStatus } from "@/constants/AdmissionStatus";
import { useAdmission } from "@/context/AdmissionContext";
import { useUI } from "@/context/UIContext";
import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";

const DashboardPage = () => {
  const { admissions, updateAdmission, deleteAdmission, loading, noResults } =
    useAdmission();
  const { showConfirmation } = useUI();

  const handleStatusUpdate = (id: number, status: AdmissionStatus) => {
    showConfirmation("Confirmar alteração de status?", () =>
      updateAdmission(id, status)
    );
  };

  const handleDeleteAdmission = (id: number) => {
    showConfirmation("Confirmar exclusão da admissão?", () =>
      deleteAdmission(id)
    );
  };

  return (
    <S.Container>
      <SearchBar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Collumns
          registrations={admissions}
          onUpdateStatus={handleStatusUpdate}
          onDelete={handleDeleteAdmission}
          noResults={noResults}
        />
      )}
    </S.Container>
  );
};
export default DashboardPage;
