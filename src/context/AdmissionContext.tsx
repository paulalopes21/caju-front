import { Admission } from "@/types/Admission";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface AdmissionContextData {
  admissions: Admission[];
  loading: boolean;
  noResults: boolean;
  fetchAdmissions: (filter?: string) => void;
}

interface AdmissionProviderProps {
  children: ReactNode;
}

const AdmissionContext = createContext<AdmissionContextData | undefined>(
  undefined
);

export const AdmissionProvider = ({ children }: AdmissionProviderProps) => {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [noResults, setNoResults] = useState(false);

  const fetchAdmissions = async (filter: string = "") => {
    setLoading(true);
    setNoResults(false);
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        `http://localhost:3000/registrations${filter}`
      );
      const data = await response.json();
      setAdmissions(data);
      setNoResults(data.length === 0);
    } catch (error) {
      console.error("Failed to fetch admissions:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <AdmissionContext.Provider
      value={{
        admissions,
        loading,
        noResults,
        fetchAdmissions,
      }}
    >
      {children}
    </AdmissionContext.Provider>
  );
};

export const useAdmission = () => {
  const context = useContext(AdmissionContext);
  if (!context)
    throw new Error("useAdmission must be used within an AdmissionProvider");
  return context;
};
