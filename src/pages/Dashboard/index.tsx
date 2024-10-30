import { useAdmission } from "@/context/AdmissionContext";

import LoadingSpinner from "@/components/LoadingSpinner";
import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";

const DashboardPage = () => {
  const { admissions, updateAdmission, deleteAdmission, loading, noResults } =
    useAdmission();
  return (
    <S.Container>
      <SearchBar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Collumns
          registrations={admissions}
          onUpdateStatus={updateAdmission}
          onDelete={deleteAdmission}
          noResults={noResults}
        />
      )}
    </S.Container>
  );
};
export default DashboardPage;
