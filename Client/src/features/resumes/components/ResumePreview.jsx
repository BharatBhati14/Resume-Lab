import useResumeStore from "../store/resumeStore";

function ResumePreview() {
  const { personalInfo } = useResumeStore();

  return (
    <div className="mx-auto max-w-200 bg-white p-8 shadow">
      <h1 className="text-3xl font-bold">
        {personalInfo.fullName}
      </h1>

      <p>{personalInfo.email}</p>
    </div>
  );
}

export default ResumePreview;