// import { useState } from "react";
// import ResumeForm from "../components/ResumeForm";
// import ResumePreview from "../components/ResumePreview";

// export default function ResumeBuilder() {
//   const [resumeData, setResumeData] = useState({});

//   return (
//     <div className="min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">

//         <h1 className="text-3xl font-bold mb-6">
//           AI Resume Builder
//         </h1>

//         <div className="grid gap-6">

//           <ResumeForm
//             setResumeData={setResumeData}
//           />

//           {/* <ResumePreview
//             resumeData={resumeData}
//           /> */}

//         </div>
//       </div>
//     </div>
//   );
// }

import { useForm, FormProvider } from "react-hook-form";
import ProfileForm from "../../profile/components/ProfileForm";
import ExperienceSection from "../components/experience/ExperienceSection";
// import { resumeSchema } from "../schema/resume.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import TitleSummarySection from "../components/TitleSummarySection";
import ProjectSection from "../components/projects/ProjectSection";
import EducationSection from "../components/education/EducationSection";
import SkillsSection from "../components/SkillsSection";
import CertificationSection from "../components/certification/CertificationSection";
import LanguageSection from "../components/languages/LanguageSection";

export default function ResumeBuilder() {
  // const methods = useForm({
  //   // resolver: zodResolver(resumeSchema),

  //   defaultValues: {
  //     personalInfo: {
  //       fullName: "",
  //       email: "",
  //       phone: "",
  //       location: "",
  //       website: "",
  //       linkedin: "",
  //       github: "",
  //       portfolio: "",
  //       profileImage: "",
  //     },
  //     experience: [],
  //     projects: [],
  //     education: [],
  //     skills: {},
  //   },
  // });

  const onSubmit = (data) => {
    console.log("Resume Data", data);
  };

  return (
    <>
      {/* <FormProvider {...methods} onSubmit={methods.handleSubmit(onSubmit)}> */}
        {/* <form onSubmit={methods.handleSubmit(onSubmit)}> */}
        <ProfileForm />
        <TitleSummarySection />
        <ExperienceSection />
        <ProjectSection />
        <SkillsSection />
        <EducationSection />
        <CertificationSection />
        <LanguageSection />
        <button type="submit">Save Resume</button>
        {/* </form> */}
      {/* </FormProvider> */}
    </>
  );
}
