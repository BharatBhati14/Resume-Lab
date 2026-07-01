import { useResumeStore } from "../store/resumeStore";
import { formatMonthYear } from "../utils/formatMonthYear";

export default function ResumePreview() {
  const {
    personalInfo,
    title,
    summary,
    experience,
    projects,
    skills,
    education,
    certifications,
    languages,
  } = useResumeStore();

  return (
    // <div className="mx-auto w-[210mm] min-h-[297mm] bg-white p-10 font-sans text-black leading-relaxed">
    <div
      id="resume"
      // min-h-[297mm]
      className="resume  mx-auto w-[210mm]  bg-white p-10 font-sans text-black leading-relaxed  " // p-10
      //  border border-gray-300 "
    >
      {/* Header */}
      <header className="border-b border-black pb-4">
        <h1 className="text-3xl font-bold">{personalInfo.fullName}</h1>

        {title && (
          <p className="mt-1 text-[16px] font-semibold capitalize">{title}</p>
        )}

        <div className="mt-2 flex flex-wrap gap-x-2 text-[15px]">
          {personalInfo.email && (
            <span className="text-blue-600 hover:underline">
              {personalInfo.email}
            </span>
          )}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.location && <span>| {personalInfo.location}</span>}
          {personalInfo.website && (
            <span className="text-blue-600 ">
              <span className="text-black">|</span> {personalInfo.website}
            </span>
          )}
          {personalInfo.linkedin && (
            <span className="text-blue-600">
              <span className="text-black">|</span> {personalInfo.linkedin}
            </span>
          )}
          {personalInfo.github && (
            <span className="text-blue-600">
              <span className="text-black">|</span> {personalInfo.github}
            </span>
          )}
          {personalInfo.portfolio && (
            <span className="text-blue-600">
              {" "}
              <span className="text-black">|</span> {personalInfo.portfolio}
            </span>
          )}
        </div>
      </header>

      {/* Summary */}
      {summary && (
        <section className="mt-6">
          <h3 className="mb-2 border-b border-black pb-1 text-[16px] font-bold uppercase">
            Professional Summary
          </h3>

          <p className="text-[15px] leading-6">{summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-[16px] font-bold uppercase">
            Experience
          </h3>

          <div className="space-y-5">
            {experience.map((exp, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[17px] font-semibold">
                      {exp.jobTitle}
                    </h4>

                    <p className="text-[15px] ">
                      {exp.company}
                      {exp.location && ` | ${exp.location}`}
                    </p>
                  </div>

                  <p className="text-[15px] whitespace-nowrap">
                    {formatMonthYear(exp.startDate)} -{" "}
                    {exp.isCurrent ? "Present" : formatMonthYear(exp.endDate)}
                  </p>
                </div>

                {exp.description.length > 0 && (
                  <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-5.5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <p className="mt-2 text-[15px]">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {exp.technologies.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-[16px] font-bold uppercase">
            Projects
          </h3>

          <div className="space-y-5">
            {projects.map((project, index) => (
              <div key={index}>
                <h4 className="text-[17px] font-semibold">{project.title}</h4>

                <ul className="mt-2 list-disc pl-5 space-y-1 text-[15px] leading-6">
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {project.technologies.length > 0 && (
                  <p className="mt-2 text-[15px]">
                    <span className="font-semibold">Technologies:</span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                )}

                <div className="mt-2 text-sm space-y-1 ">
                  {project.githubUrl && (
                    <p>
                      <span className="font-semibold">GitHub:</span>{" "}
                      <span className="text-blue-600 hover:underline">
                        {project.githubUrl}
                      </span>
                      {/* {project.githubUrl.replace(/^https?:\/\//, "")} */}
                    </p>
                  )}

                  {project.liveUrl && (
                    <p>
                      <span className="font-semibold">LiveUrl:</span>{" "}
                      <span className="text-blue-600 hover:underline">
                        {project.liveUrl}
                      </span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {(skills.technical.length > 0 ||
        skills.tools.length > 0 ||
        skills.soft.length > 0) && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-[16px] font-bold uppercase">
            Skills
          </h3>

          {skills.technical.length > 0 && (
            <p className="text-[15px]">
              <span className="font-semibold">Technical:</span>{" "}
              {skills.technical.join(", ")}
            </p>
          )}

          {skills.tools.length > 0 && (
            <p className="mt-2 text-[15px]">
              <span className="font-semibold">Tools:</span>{" "}
              {skills.tools.join(", ")}
            </p>
          )}

          {skills.soft.length > 0 && (
            <p className="mt-2 text-[15px]">
              <span className="font-semibold">Soft Skills:</span>{" "}
              {skills.soft.join(", ")}
            </p>
          )}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-[16px] font-bold uppercase">
            Education
          </h3>

          <div className="space-y-5">
            {education.map((edu, index) => (
              <div key={index}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-[16px] font-bold capitalize">
                      {edu.degree}
                      {edu.fieldOfStudy && ` in ${edu.fieldOfStudy}`}
                    </h4>

                    <p className="text-[15px]">
                      {edu.institution}
                      {edu.location && ` | ${edu.location}`}
                    </p>
                  </div>

                  {(edu.startDate || edu.endDate || edu.isCurrent) && (
                    <p className="text-[15px] whitespace-nowrap">
                      {edu.startDate && formatMonthYear(edu.startDate)}
                      {(edu.startDate || edu.endDate || edu.isCurrent) && " - "}
                      {edu.isCurrent
                        ? "Present"
                        : edu.endDate
                          ? formatMonthYear(edu.endDate)
                          : ""}
                    </p>
                  )}
                </div>

                {edu.grade && (
                  <p className="mt-0 text-[15px]">
                    <span className="font-semibold">Grade:</span> {edu.grade}
                  </p>
                )}

                {edu.description && (
                  <p className="mt-1 text-[15px] leading-5.5">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-base font-bold uppercase">
            Certifications
          </h3>

          <ul className="space-y-2 text-sm">
            {certifications.map((cert, index) => (
              <li key={index}>
                <span className="font-semibold">{cert.name}</span>

                {cert.issuer && <> — {cert.issuer}</>}

                {cert.issueDate && (
                  <>
                    {" | "}
                    {new Date(cert.issueDate).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </>
                )}

                {cert.url && (
                  <>
                    {" | "}
                    {cert.url}
                  </>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Languages */}
      {languages.length > 0 && (
        <section className="mt-6">
          <h3 className="mb-3 border-b border-black pb-1 text-base font-bold uppercase">
            Languages
          </h3>

          <p className="text-sm capitalize">
            {languages
              .map((lang) => `${lang.name} (${lang.proficiency})`)
              .join(" | ")}
          </p>
        </section>
      )}
    </div>
  );
}
