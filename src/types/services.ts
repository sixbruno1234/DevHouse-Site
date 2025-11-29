export interface ServiceFeature {
  text: string;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Nome do ícone Lucide
  features: ServiceFeature[];
  technologies?: string[];
  pricing?: {
    starting: string;
    currency: string;
  };
  examples?: string[];
}
