"use client";

import { findBestKimonoSize } from "@/lib/utils";
import { useState } from "react";
import RecommendationForm, {
  RecommendationFormSchema,
} from "./recommendation-form";

const RecommendationWrapper = () => {
  const [size, setSize] = useState<number>(0);

  const handleGenerateRecommendation = (
    formValues: RecommendationFormSchema
  ) => {
    const size = findBestKimonoSize(formValues.height, formValues.weight);
    setSize(size);
  };

  return (
    <>
      <RecommendationForm onSubmit={handleGenerateRecommendation} />
      {size > 0 && (
        <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Tamanho de kimono recomendado</h2>
            <div className="text-4xl font-bold">{`A${size - 1}`}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default RecommendationWrapper;
