export type Language = 'id' | 'en';

export interface FlowchartStep {
  id: string;
  phase: number;
  phaseTitle: {
    id: string;
    en: string;
  };
  stepNumber: string;
  title: {
    id: string;
    en: string;
  };
  subtitle: {
    id: string;
    en: string;
  };
  category: 'feedstock' | 'pyrolysis' | 'preparation' | 'binder' | 'formulation' | 'testing' | 'optimization';
  objective: {
    id: string;
    en: string;
  };
  parameters: {
    label: { id: string; en: string };
    value: string;
    description: { id: string; en: string };
  }[];
  equipment: string[];
  protocol: {
    id: string[];
    en: string[];
  };
  criticalFactors: {
    id: string[];
    en: string[];
  };
  output: {
    id: string;
    en: string;
  };
}

export interface PaperSection {
  id: string;
  number: string;
  title: {
    id: string;
    en: string;
  };
  purpose: {
    id: string;
    en: string;
  };
  subsections: {
    id: string;
    code: string;
    title: {
      id: string;
      en: string;
    };
    guidelines: {
      id: string[];
      en: string[];
    };
    sampleDraft?: {
      id: string;
      en: string;
    };
    keyReferences?: string[];
  }[];
}

export interface ResearchVariable {
  category: 'independent' | 'dependent' | 'control';
  name: {
    id: string;
    en: string;
  };
  symbol: string;
  units: string;
  levelsOrRange: string;
  testingMethod: {
    id: string;
    en: string;
  };
  impact: {
    id: string;
    en: string;
  };
}

export interface BriquetteFormulation {
  code: string;
  coffeeRatio: number; // percentage of charcoal mass
  bananaRatio: number; // percentage of charcoal mass
  binderPercent: number; // percentage of total dry weight
  calorificValue: number; // cal/g
  burningDuration: number; // minutes
  ashContent: number; // percentage
  moistureContent: number; // percentage
  smokeIndex: 'Very Low' | 'Low' | 'Moderate';
  sniCompliance: boolean;
}

export interface QualityStandard {
  parameter: {
    id: string;
    en: string;
  };
  sniValue: string;
  astmStandard: string;
  testingApparatus: string;
  formula?: string;
  significance: {
    id: string;
    en: string;
  };
}
