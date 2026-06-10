import useResumeStore from "../store/resumeStore";

function PersonalInfoForm() {
  const { personalInfo, updatePersonalInfo } =
    useResumeStore();

  return (
    <div className="space-y-3">
      <input
        className="w-full border p-2"
        placeholder="Full Name"
        value={personalInfo.fullName}
        onChange={(e) =>
          updatePersonalInfo({
            fullName: e.target.value,
          })
        }
      />

      <input
        className="w-full border p-2"
        placeholder="Email"
        value={personalInfo.email}
        onChange={(e) =>
          updatePersonalInfo({
            email: e.target.value,
          })
        }
      />
    </div>
  );
}

export default PersonalInfoForm;