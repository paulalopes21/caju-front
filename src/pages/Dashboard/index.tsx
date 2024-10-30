import { useAdmission } from "@/context/AdmissionContext";

import LoadingSpinner from "@/components/LoadingSpinner";
import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";

const DashboardPage = () => {
  const { admissions, loading, noResults } = useAdmission();
  return (
    <S.Container>
      <SearchBar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Collumns registrations={admissions} noResults={noResults} />
      )}
    </S.Container>
  );
};
export default DashboardPage;
