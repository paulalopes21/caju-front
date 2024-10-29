import { useAdmission } from "@/context/AdmissionContext";

import Collumns from "./components/Columns";
import { SearchBar } from "./components/Searchbar";
import * as S from "./styles";

const DashboardPage = () => {
  const { admissions } = useAdmission();
  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={admissions} />
    </S.Container>
  );
};
export default DashboardPage;
