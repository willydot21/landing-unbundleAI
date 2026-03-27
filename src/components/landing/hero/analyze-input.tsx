import { Icon } from "../../icons/Icon";
import { useState } from "react";
import { useNavigate } from "react-router";
import type { IAnalyzeResult } from "../../../services/types";
import { mockData, postAnalyze } from "../../../services/unbundle-api";
import { storeAnalyzeResult, computeScore } from "../../../services/local-unbundle";

export default function AnalyzeInput() {
  const [value, setValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    const text = value.trim();
    if (!text || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const data = await postAnalyze(text);
      const result = mockData(data) as IAnalyzeResult;
      result.score = computeScore(result.features, {
        target_users: result.targetUsers,
        notable_tech_assumptions: result.notableAssumptions,
      });
      const id = storeAnalyzeResult(result);
      navigate(`/analyze/results/${id}`);
    } catch (error) {
      console.error("Analysis API error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-row justify-between bg-white p-2 items-center rounded-xl shadow-black-op shadow-2xl w-full max-w-2xl">
      <div className="flex flex-row items-center justify-center gap-x-2.5 w-full">
        <Icon name="link" classes="mx-3" /> 
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAnalyze()}
          type="text"
          disabled={isSubmitting}
          className="w-full focus:outline-0 placeholder-shown:text-ellipsis pr-2"
          placeholder="Paste URL or describe an app..."
        />
      </div>
      <button
        onClick={handleAnalyze}
        disabled={isSubmitting}
        className="flex flex-row gap-2.5 items-center justify-center text-primary-100 font-semibold bg-secondary-200 p-4 lg:px-7 lg:py-3 rounded-xl hover:cursor-pointer hover:bg-primary-100 hover:text-secondary-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Icon name="wand" classes="w-6 h-6 hidden lg:block" strokeColor="current" />
        <Icon name="dir_right" classes="w-6 h-6 lg:hidden" fillColor="current"  />
        <span className="lg:block hidden">Deconstruct</span>
      </button>
    </div>
  )
}