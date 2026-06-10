import PersonalInfoForm from "../components/PersonalInfoForm";
import ResumePreview from "../components/ResumePreview";

function ResumeBuilderPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r p-4">
        <PersonalInfoForm />
      </div>

      <div className="flex-1 bg-gray-100 p-4">
        <ResumePreview />
      </div>
    </div>
  );
}

export default ResumeBuilderPage;