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
  fetchAdmissions: () => void;
}

interface AdmissionProviderProps {
  children: ReactNode;
}

const AdmissionContext = createContext<AdmissionContextData | undefined>(
  undefined
);

export const AdmissionProvider = ({ children }: AdmissionProviderProps) => {
  const [admissions, setAdmissions] = useState<Admission[]>([]);

  const fetchAdmissions = async () => {
    try {
      const response = await fetch("http://localhost:3000/registrations");
      const data = await response.json();
      setAdmissions(data);
    } catch (error) {
      console.error("Failed to fetch admissions:", error);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  return (
    <AdmissionContext.Provider
      value={{
        admissions,
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
