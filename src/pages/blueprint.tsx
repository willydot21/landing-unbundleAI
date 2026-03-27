import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router";
import Layout from "./layout";
import { fetchBlueprint } from "../services/unbundle-api";
import { getLocalResult, getLastStoredResultId } from "../services/local-unbundle";
import type { IAnalyzeResult } from "../services/types";

export default function Blueprint() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<IAnalyzeResult | null>(null);
  const [blueprint, setBlueprint] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [requestBody, setRequestBody] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const loadBlueprint = async (featureJson: string) => {
    setLoading(true);
    setError(null);
    setBlueprint(null);

    try {
      const result = await fetchBlueprint(featureJson);
      setBlueprint(result);
    } catch (err) {
      setError("No se pudo generar el blueprint. Verifica que el backend /blueprint esté disponible.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const id = searchParams.get("id") || getLastStoredResultId();
    if (!id) {
      setError("No hay un análisis seleccionado. Analiza una app primero para generar un blueprint.");
      setLoading(false);
      return;
    }

    const local = getLocalResult(id);
    if (!local) {
      setError(`No se encontró el análisis local para el ID: ${id}`);
      setLoading(false);
      return;
    }

    setAnalysis(local);
    const featureJson = JSON.stringify(local.features);
    setRequestBody(JSON.stringify({ feature_json: featureJson }, null, 2));
    void loadBlueprint(featureJson);
  }, [searchParams]);

  const handleCopy = async () => {
    if (!blueprint) return;
    await navigator.clipboard.writeText(blueprint);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Layout>
      <div className="w-full min-h-[80vh] py-24 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col gap-y-10">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl font-extrabold">Blueprint Generator</h1>
            <p className="text-sm text-tertiary-100 max-w-2xl">
              Genera un Blueprint de producto desde tu análisis. Este page hace POST a <code>/blueprint</code> con <strong>feature_json</strong> en el body.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <section className="space-y-6 bg-white rounded-3xl p-8 shadow-black-op shadow-2xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold">Blueprint output</h2>
                  <p className="text-sm text-gray-500">Resultado recibido desde el backend /blueprint.</p>
                </div>
                <button
                  onClick={() => { if (analysis) void loadBlueprint(JSON.stringify(analysis.features)); }}
                  className="px-4 py-2 rounded-full bg-secondary-200 text-primary-100 font-semibold hover:bg-primary-100 hover:text-secondary-200"
                >
                  Regenerate
                </button>
              </div>

              {loading ? (
                <div className="min-h-70 animate-pulse rounded-3xl bg-gray-100" />
              ) : error ? (
                <div className="rounded-3xl bg-red-50 border border-red-200 p-6 text-red-700">
                  <p>{error}</p>
                  <button
                    onClick={() => navigate("/analyze")}
                    className="mt-4 inline-flex px-4 py-2 rounded-full bg-primary-100 text-white hover:bg-primary-200"
                  >
                    Ir a analizar
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <pre className="whitespace-pre-wrap break-word rounded-3xl bg-slate-950 p-6 text-sm text-slate-100">{blueprint}</pre>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleCopy}
                      className="inline-flex items-center justify-center rounded-full bg-secondary-200 px-4 py-2 font-semibold text-primary-100 hover:bg-primary-100 hover:text-secondary-200"
                    >
                      {copied ? "Copied" : "Copy blueprint"}
                    </button>
                    <button
                      onClick={() => navigate("/analyze")}
                      className="inline-flex items-center justify-center rounded-full border border-gray-200 px-4 py-2 font-semibold text-gray-700 hover:bg-gray-100"
                    >
                      Back to analyze
                    </button>
                  </div>
                </div>
              )}
            </section>

            <aside className="space-y-6">
              <div className="bg-white rounded-3xl p-8 shadow-black-op shadow-2xl">
                <h3 className="text-xl font-bold mb-3">Source analysis</h3>
                {analysis ? (
                  <div className="space-y-3 text-sm text-slate-600">
                    <p><strong>Name:</strong> {analysis.name}</p>
                    <p><strong>Features:</strong> {analysis.features.length}</p>
                    <p><strong>Score:</strong> {analysis.score ?? 0}</p>
                    <p><strong>Tags:</strong> {analysis.tags.join(", ")}</p>
                  </div>
                ) : (
                  <p className="text-gray-500">No analysis loaded.</p>
                )}
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-black-op shadow-2xl">
                <h3 className="text-xl font-bold mb-3">Request body</h3>
                <pre className="whitespace-pre-wrap break-word rounded-3xl bg-slate-950 p-4 text-xs text-slate-100">{requestBody || "No request generated yet."}</pre>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
