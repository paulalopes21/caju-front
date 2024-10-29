import { AdmissionStatus } from "@/constants/AdmissionStatus";

export interface Admission {
  id: number;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
  status: AdmissionStatus;
}
