import { useGenerateResume, useSaveResume } from "../api/resumeApi";
import { toSendResumeData } from "../hooks/useToSendResumeData";
import { useResumeStore } from "../store/resumeStore";

export default function ResumeForm() {
  // const saveResume = useSaveResume();

  const resumeData = toSendResumeData();
  // console.log(setResumeData)

  // const data  = generateResume.mutate(resumeData);
  const handleGenerate = () => {
    generateResume.mutate(resumeData);
  };

  return (
    <div>
      <button onClick={handleGenerate}>Generate Resume</button>
    </div>
  );
}
