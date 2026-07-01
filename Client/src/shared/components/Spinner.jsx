import { useEffect, useState } from "react";

const steps = [
  "Gathering your information",
  "Organizing resume sections",
  "Optimizing the contents",
  "Formatting the layout",
  "Applying professional styling",
  "Optimizing for ATS compatibility",
  "Running final quality checks",
  "Finalizing your resume",
];

export default function Spinner() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    // <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div className="flex min-h-[80vh] items-center justify-center bg-white px-4">
      <div className="w-full max-w-lg rounded-2xl border border-gray-200 bg-white p-8 m-2 md:m-4 shadow-xl">
        {/* Main Spinner */}
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />

          <h2 className="mt-6 text-2xl font-bold text-gray-900">
            Generating your resume
          </h2>

          <p className="mt-2 text-center text-gray-500">
            Please wait while we prepare your professional resume.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <div key={step} className="flex items-center gap-3">
              {index < currentStep ? (
                <span className="text-xl text-green-600">✓</span>
              ) : index === currentStep ? (
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-200 border-t-blue-600" />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-gray-300" />
              )}

              <span
                className={`transition-colors duration-300 ${
                  index < currentStep
                    ? "font-medium text-green-600"
                    : index === currentStep
                      ? "font-semibold text-blue-700"
                      : "text-gray-400"
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 rounded-lg bg-blue-50 p-4 text-center text-sm text-blue-700">
          This usually takes around <strong>15–20 seconds</strong>. Please keep
          this page open while we finish generating your resume.
        </div>
      </div>
    </div>
  );
}
