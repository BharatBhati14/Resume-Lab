export const generateResumeSectionPrompt = ( resumeContent, resumeSectionToUpdate ) => {
  return `
        You are an expert resume writer.
        Rewrite only the ${resumeSectionToUpdate}.
        Do not modify any other section.
        
        Return ONLY valid JSON.

        Schema:

        {
            "summary": "",
            "skills": [],
            "experience": [
                {
                "jobTitle": "",
                "company": "",
                "description": ["bullets"]
                }
            ],
            "projects": [
                {
                "name": "",
                "description": ["bullets"],
                "technologies": []
                }
            ]
        }

        Candidate Information:

        ${JSON.stringify(resumeContent, null, 2)}

        Rules:
        - Do not modify any other section.
        - Do not invent facts.
        - Do not invent companies.
        - Do not invent metrics.
        - Do not invent dates.
        - Improve wording only.
        - Tailor content toward the target role.
        - Projects should have detailed descriptions + impact
        - Use action verbs like(Developed, Built, Designed,etc).
        - Optimize for ATS.
        - Add missing professional wording.
        - Keep summary under 80 words.

        Return valid JSON only.
    `;
};
