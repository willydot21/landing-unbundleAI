import type { IAnalyzeResult } from "./types";

const TARGET_USER_PATTERNS: Array<[RegExp, string]> = [
  [/\bteam(s)?\b|collaboration|project management|workflow/i, "Team members"],
  [/\bconsumer(s)?\b|customer(s)?\b|client(s)?\b|user(s)?\b|app users/i, "End users"],
  [/\badmin(s)?\b|manager(s)?\b|operator(s)?\b|business|enterprise/i, "Business users"],
  [/\bcreator(s)?\b|influencer(s)?\b|seller(s)?\b|vendor(s)?\b/i, "Creators & sellers"],
  [/\bstudent(s)?\b|\blearner(s)?\b|education|academy/i, "Learners"],
];

const PURPOSE_PATTERNS: Array<[RegExp, string]> = [
  [/\btrack(s|ing)?\b|analytics|metrics|report(s)?\b/i, "Measure performance"],
  [/\bautomate(s|d)?\b|workflow|streamline|simplify/i, "Automate workflows"],
  [/\bconnect(s|ed)?\b|integrat(es|ion)?\b|sync/i, "Connect systems"],
  [/\bmarket(ing|place)?\b|sell(s|ing)?\b|commerce|checkout/i, "Enable commerce"],
  [/\bdiscover|recommend|search|match/i, "Help users find value quickly"],
];

const TAG_PATTERNS: Array<[RegExp, string]> = [
  [/\bcheckout\b|\bcart\b|\bpayment\b|\bbilling\b/i, "Commerce"],
  [/\bproject management\b|\btask(s)?\b|\bcollaboration\b/i, "Productivity"],
  [/\bride share\b|\btransportation\b|\bdriver\b|\bpassenger\b/i, "Mobility"],
  [/\bsaas\b|\bplatform\b|\bapp\b|\btool\b/i, "SaaS"],
  [/\bsecurity\b|\bauthentication\b|\blogin\b/i, "Security"],
  [/\bvideo\b|\blive\b|\bstreaming\b/i, "Media"],
  [/\bfinance\b|\bbanking\b|\binvoice\b/i, "Finance"],
];

const PERCEPTION_PATTERNS: Array<[RegExp, string]> = [
  [/\bsecure\b|\btrusted\b|\breliable\b/i, "Secure and reliable"],
  [/\bfast\b|\binstant\b|\breal[- ]time\b|\bresponsive\b/i, "Fast and responsive"],
  [/\bmodern\b|\bminimal\b|\bsleek\b/i, "Modern and simple"],
  [/\bscalable\b|\bcloud\b|\bAPI\b/i, "Built for scale"],
];

const ASSUMPTION_PATTERNS: Array<[RegExp, string]> = [
  [/\bauth|login|signup|SSO|identity\b/i, "Requires user authentication"],
  [/\bpayment|billing|subscription|invoice\b/i, "Includes payment or billing workflows"],
  [/\bAPI|integration|webhook(s)?\b/i, "Depends on external integrations"],
  [/\bdata storage\b|\bcloud\b|\bbackend\b/i, "Requires cloud persistence"],
  [/\bmobile\b|\bweb\b|\bbrowser\b/i, "Designed for modern web or mobile access"],
];

const DEFAULT_FEATURES = [
  { name: "Core workflow", short_desc: "Define the main user flow that delivers the product�s primary value.", category: "Workflow" },
  { name: "User onboarding", short_desc: "Guide new users through signup, setup and first use.", category: "Experience" },
  { name: "Analytics dashboard", short_desc: "Show usage, performance and key metrics in a single view.", category: "Insights" },
];

function unique(values: string[]) {
  return Array.from(new Set(values.filter(Boolean)));
}

const LAST_RESULT_ID_KEY = "unbundle_last_result_id";

function createId() {
  return `local-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function normalizeText(text: string) {
  return text.replace(/\s+/g, " ").trim();
}

function extractName(text: string) {
  const titleMatch = text.match(/^(?:The\s)?([A-Z][\w\s]{3,60}?)(?=\s(?:is|helps|allows|enables|that|for|to))/i);
  if (titleMatch) return titleMatch[1].trim();
  const firstSentence = text.split(/[.!?]\s/)[0].trim();
  return firstSentence.slice(0, 60) || "App Analysis";
}

function extractTags(text: string) {
  const tags = TAG_PATTERNS.filter(([pattern]) => pattern.test(text)).map(([, tag]) => tag);
  return unique(tags.concat(["AI", "Analysis", "Unbundling"]));
}

function extractPurposes(text: string) {
  const purposes = PURPOSE_PATTERNS.filter(([pattern]) => pattern.test(text)).map(([, purpose]) => purpose);
  return unique(purposes.length ? purposes : ["Define a clear product scope"]);
}

function extractTargetUsers(text: string) {
  const users = TARGET_USER_PATTERNS.filter(([pattern]) => pattern.test(text)).map(([, label]) => label);
  return unique(users.length ? users : ["Early adopters"]);
}

function extractPublicPerception(text: string) {
  const perceptions = PERCEPTION_PATTERNS.filter(([pattern]) => pattern.test(text)).map(([, label]) => label);
  return unique(perceptions.length ? perceptions : ["Designed for clarity and speed"]);
}

function extractAssumptions(text: string) {
  const assumptions = ASSUMPTION_PATTERNS.filter(([pattern]) => pattern.test(text)).map(([, assumption]) => assumption);
  if (assumptions.length > 0) return unique(assumptions);
  return ["Assumes modern web access and cloud persistence"];
}

function extractFeatures(text: string) {
  const features: IAnalyzeResult["features"] = [];

  function add(name: string, short_desc: string, category: string) {
    if (!features.some((feature) => feature.name === name)) {
      features.push({ name, short_desc, category });
    }
  }

  if (/\bcheckout\b|\bshopping cart\b|\bpayment\b|\bbilling\b/i.test(text)) {
    add("Checkout flow", "Manage products, cart and payment processing.", "Commerce");
  }
  if (/\btask(s)?\b|\bproject management\b|\bworkflow\b|\bcollaboration\b/i.test(text)) {
    add("Task management", "Create, assign and track tasks across teams.", "Productivity");
  }
  if (/\bride share\b|\btransportation\b|\bdriver\b|\bpassenger\b/i.test(text)) {
    add("Ride booking", "Match riders with drivers and coordinate trips.", "Mobility");
  }
  if (/\bvideo\b|\blive\b|\bstreaming\b/i.test(text)) {
    add("Video delivery", "Stream or share video content in real time.", "Media");
  }
  if (/\bdata\b|\banalytics\b|\breport(s)?\b|\bmetrics\b/i.test(text)) {
    add("Analytics dashboard", "Surface usage and performance metrics.", "Insights");
  }
  if (/\buser onboarding\b|\bsignup\b|\blogin\b|\bauthentication\b/i.test(text)) {
    add("Onboarding flow", "Guide new users through sign-up and first use.", "Experience");
  }
  if (/\bapi\b|\bintegration\b|\bwebhook\b|\bexternal service\b/i.test(text)) {
    add("Integration layer", "Connect with third-party services and APIs.", "Platform");
  }
  if (/\bmarket(ing|place)?\b|\bsell\b|\bbuy\b|\border\b/i.test(text)) {
    add("Commerce engine", "Support product listings, orders and checkout.", "Commerce");
  }

  if (features.length === 0) {
    DEFAULT_FEATURES.forEach((feature) => add(feature.name, feature.short_desc, feature.category));
  }

  return features;
}

export function saveToStorage(id: string, result: IAnalyzeResult) {
  const key = "unbundle_local_results_v1";
  const raw = localStorage.getItem(key);
  const store = raw ? JSON.parse(raw) : {};
  store[id] = { id, createdAt: new Date().toISOString(), data: result };
  localStorage.setItem(key, JSON.stringify(store));
}

export function storeAnalyzeResult(result: IAnalyzeResult) {
  const id = createId();
  saveToStorage(id, result);
  localStorage.setItem(LAST_RESULT_ID_KEY, id);
  return id;
}

export function getLastStoredResultId() {
  return localStorage.getItem(LAST_RESULT_ID_KEY);
}

export function getLastStoredResult(): IAnalyzeResult | null {
  const id = getLastStoredResultId();
  if (!id) return null;
  return getLocalResult(id);
}

export function getLocalResult(id: string): IAnalyzeResult | null {
  try {
    const key = "unbundle_local_results_v1";
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const store = JSON.parse(raw);
    const entry = store[id];
    if (!entry) return null;
    return entry.data as IAnalyzeResult;
  } catch (e) {
    return null;
  }
}

export function computeScore(features: any[], parsed: any) {
  const featureCount = features.length;
  const isolation = Math.min(10, Math.round((featureCount / 5) * 10));
  const market = (parsed.target_users || []).length ? 8 : 5;
  const infra = (parsed.notable_tech_assumptions || []).some((a: string) => /payment|auth|billing|video|stream/i.test(a)) ? 4 : 7;
  const score = Math.round((isolation * 0.45 + market * 0.35 + infra * 0.2) * 10);
  return Math.max(0, Math.min(100, score));
}

export function analyzeLocal(text: string) {
  const normalized = normalizeText(text);
  const result: IAnalyzeResult = {
    name: extractName(normalized),
    description: normalized,
    tags: extractTags(normalized),
    purposes: extractPurposes(normalized),
    targetUsers: extractTargetUsers(normalized),
    publicPerception: extractPublicPerception(normalized),
    notableAssumptions: extractAssumptions(normalized),
    features: extractFeatures(normalized),
  };

  result.score = computeScore(result.features, {
    target_users: result.targetUsers,
    notable_tech_assumptions: result.notableAssumptions,
  });

  const id = createId();
  saveToStorage(id, result);
  localStorage.setItem(LAST_RESULT_ID_KEY, id);
  return { id, result };
}
