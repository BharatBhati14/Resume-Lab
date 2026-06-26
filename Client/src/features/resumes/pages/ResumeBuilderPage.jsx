import ProfileForm from "../../profile/components/ProfileForm";
import ExperienceSection from "../components/experience/ExperienceSection";
import TitleSummarySection from "../components/TitleSummarySection";
import ProjectSection from "../components/projects/ProjectSection";
import EducationSection from "../components/education/EducationSection";
import SkillsSection from "../components/SkillsSection";
import CertificationSection from "../components/certification/CertificationSection";
import LanguageSection from "../components/languages/LanguageSection";
import { useStepStore } from "../store/resumeStep";

export default function ResumeBuilder() {
  const setStep = useStepStore((state) => state.setCurrentStep);
  const step = useStepStore((state) => state.currentStep);
  const steps = [
    "personalInfo",
    "titleSummary",
    "experience",
    "education",
    "projects",
    "skills",
    "certifications",
    "languages",
  ];

  const sections = [
    ProfileForm,
    TitleSummarySection,
    ExperienceSection,
    EducationSection,
    ProjectSection,
    SkillsSection,
    CertificationSection,
    LanguageSection,
  ];

  const stepIndex = Math.min(Math.max(step, 0), sections.length - 1);
  const CurrentSection = sections[stepIndex];
  // const CurrentSection = sections[step];

  const onSubmit = (data) => {
    console.log("Resume Data", data);
  };

  return (
    <>
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-blue-600 rounded-full transition-all"
            style={{
              width: `${((step + 1) / 8) * 100}%`,
            }}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {step + 1} of 8</span>
          <span>{Math.round(((step + 1) / 8) * 100)}%</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <CurrentSection
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </div>
    </>
  );
}
