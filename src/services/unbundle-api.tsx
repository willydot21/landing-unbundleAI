import type { IApiAnalyzeResult } from "./types";


const apiUrl = {
  dev: 'http://localhost:8000',
  prod: 'https://unbundleai-api.onrender.com',
}['dev']; // Change to 'prod' for production


export const mockData = (data: IApiAnalyzeResult) => {
  return {
    name: data.parsed.name,
    description: data.parsed.description,
    tags: data.parsed.tags,
    targetUsers: data.parsed.target_users,
    purposes: data.parsed.main_purposes,
    features: data.parsed.high_level_features,
    publicPerception: data.parsed.public_perception,
    notableAssumptions: data.parsed.notable_tech_assumptions
  }
}

export function analyzeApp(text?: string) {
  return [
    apiUrl + "/analyze",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    }
  ];
}