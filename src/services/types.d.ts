
export interface IAnalyzeResult {
  parsed: {
    name: string;
    tags: string[];
    description: string;
    tags: string[];
    purposes: string[];
    publicPerception: string[];
    notableAssumptions: string[];
    features: {
      name: string;
      description: string;
      category: string;
    }[]
  }
}