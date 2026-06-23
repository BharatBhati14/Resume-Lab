import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useGenerateResume, useSaveResume } from "../hooks/useResume";
import ProfileForm from "../../profile/components/ProfileForm";

export default function ResumeForm({ setResumeData }) {
//   const generateResume = useGenerateResume();
//   const saveResume = useSaveResume();

//   const { register, reset } = useForm({
//     defaultValues: {
//       title: "",

//       personalInfo: {
//         fullName: "",
//         email: "",
//         phone: "",
//       },

//       summary: "",
//     },
//   });

//   const values = watch();

//   useEffect(() => {
    // setResumeData(values);
//   }, [values]);

    const {register} = useForm()

  return (
    <div className="bg-white  rounded-xl shadow ">
      <ProfileForm />

      <input
        {...register("title")}
        placeholder="Resume Title"
        className="w-full border p-3 rounded mb-3"
      />


      <textarea
        {...register("summary")}
        placeholder="Professional Summary"
        className="w-full border p-3 rounded h-32"
      />

      
    </div>
  );
}
