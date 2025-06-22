export interface RegulationStatus {
  implemented: boolean;
  inProgress: boolean;
  planned: boolean;
  noRegulation: boolean;
}

export interface CountryRegulation {
  countryCode: string;
  countryName: string;
  status: RegulationStatus;
  lastUpdated: string;
  regulationDetails?: {
    name?: string;
    description?: string;
    url?: string;
    effectiveDate?: string;
  };
}

export interface RegulationData {
  countries: CountryRegulation[];
  lastGlobalUpdate: string;
}