export interface InvestigationData {
  patientName: string;
  investigationType: string;
  result: string;
  investigationDate?: string;
  notes?: string;
}

export interface InvestigationType {
  id: string;
  patientName: string;
  investigationType: string;
  result: string;
  notes?: string;
  investigationDate?: string;
};