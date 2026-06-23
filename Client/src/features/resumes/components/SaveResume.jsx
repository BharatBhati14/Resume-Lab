import React from "react";
import { useSaveResume } from "../hooks/useResume";

export default function SaveResume() {
  const saveResume = useSaveResume();
  return (
    <>
      <button
        type="button"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
          generateResume.mutate(watch(), {
            onSuccess: (generatedResume) => {
              reset(generatedResume);

              setResumeData(generatedResume);
            },
          });
        }}
      >
        Generate Resume
      </button>
      <button
        type="button"
        className="ml-3 bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => {
          saveResume.mutate(watch());
        }}
      >
        Save Resume
      </button>
    </>
  );
}
