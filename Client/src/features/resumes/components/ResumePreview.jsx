export default function ResumePreview({ resumeData }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h1 className="text-3xl font-bold">
        {resumeData?.personalInfo?.fullName}
      </h1>

      <p>{resumeData?.personalInfo?.email}</p>

      <p>{resumeData?.personalInfo?.phone}</p>

      <hr className="my-4" />

      <h2 className="font-bold text-xl mb-2">Summary</h2>

      <p>{resumeData?.summary}</p>
    </div>
  );
}
