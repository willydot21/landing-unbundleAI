

export interface IApiAnalyzeResult {
  parsed: {
    name: string;
    tags: string[];
    description: string;
    tags: string[];
    main_purposes: string[];
    target_users: string[];
    public_perception: string[];
    notable_tech_assumptions: string[];
    high_level_features: {
      name: string;
      short_desc: string;
      category: string;
    }[]
  }
}

export interface IAnalyzeResult {
  name: string;
  tags: string[];
  description: string;
  purposes: string[];
  targetUsers: string[];
  publicPerception: string[];
  notableAssumptions: string[];
  features: {
    name: string;
    short_desc: string;
    category: string;
  }[];
  score?: number;
}