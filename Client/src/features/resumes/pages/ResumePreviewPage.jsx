import React from "react";
import ResumePreview from "../components/ResumePreview";
import { useResumeStore } from "../store/resumeStore";
import { Link } from "react-router-dom";
import { useGenerateResume } from "../api/resumeApi";
import Spinner from "../../../shared/components/Spinner";
import ResumeViewport from "../components/ResumeViewport";
import handleDownload from "../utils/exportPDF";
// import "../../../../src/index.css";

function ResumePreviewPage() {
  const resumeMutation = useGenerateResume();

  const hasResume = sessionStorage.getItem("resume-builder");

  

  //   console.log(hasResume);
  if (!hasResume) {
    return (
      <div className="mx-auto flex min-h-125 w-full max-w-[210mm] items-center justify-center rounded-lg border border-dashed border-gray-300 bg-white p-8 text-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700">
            No Resume Yet, Create One
          </h2>

          <Link to={"/resume"}>
            <button
              type="button"
              className="border rounded-lg mt-4 bg-blue-600 px-5 py-2.5 mr-6 font-medium text-white hover:bg-blue-700 cursor-pointer"
            >
              Create Resume
            </button>
          </Link>

          <p className="mt-2 text-gray-500">
            Start filling in your details to see the resume preview.
          </p>
        </div>
      </div>
    );
  }

  if (resumeMutation.isPending) {
    return <Spinner />;
  }

  return (
    <>
      <div className="min-h-[calc(100vh-64px)] bg-gray-100">
        <ResumeViewport>
          <ResumePreview />
        </ResumeViewport>

        {/* <div className="print-only">
          <ResumePreview />
        </div> */}

        {/* <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"> */}
        <div className="sticky bottom-4 z-50 mt-8 flex justify-center ">
          <div className="flex gap-5 rounded-xl bg-white/90 p-4 shadow-lg backdrop-blur border border-gray-300">
            {/* Edit */}
            <Link
              to="/resume/edit"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
              </svg>
              Edit Resume
            </Link>

            {/* Download */}
            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumePreviewPage;
