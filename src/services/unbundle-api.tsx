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

export async function postAnalyze(text: string) {
  const response = await fetch(apiUrl + "/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!response.ok) {
    throw new Error(`Analyze API failed: ${response.status}`);
  }

  const data = await response.json();
  return data as IApiAnalyzeResult;
}

export async function fetchBlueprint(featureJson: string) {
  const response = await fetch(apiUrl + "/blueprint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ feature_json: featureJson }),
  });

  if (!response.ok) {
    throw new Error(`Blueprint API failed: ${response.status}`);
  }

  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    const data = await response.json();
    if (typeof data === "string") return data;
    return data.blueprint || data.result || JSON.stringify(data, null, 2);
  }

  return response.text();
}