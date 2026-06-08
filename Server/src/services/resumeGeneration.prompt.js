export const generateResumePrompt = (profile) => {
  return `
        You are an expert resume writer.
        Create a detailed, professional, ATS-friendly resume content in JSON format.
        
        Return ONLY valid JSON.

        Schema:

        {
            "summary": "",
            "skills": [],
            "experience": [
                {
                "jobTitle": "",
                "company": "",
                "startDate": "",
                "endDate": "",
                "description": ["bullets"]
                }
            ],
            "projects": [
                {
                "name": "",
                "description": ["bullets"],
                "technologies": []
                }
            ],
            "education": [
                {
                "institution": "",
                "degree": "",
                "year": ""
                }
            ]
        }

        Candidate Information:

        ${JSON.stringify(profile, null, 2)}

        Rules:
        - Do not invent facts.
        - Do not invent companies.
        - Do not invent metrics.
        - Do not invent dates.
        - Improve wording only.
        - Tailor content toward the target role.
        - Projects should have detailed descriptions + impact
        - Use action verbs like(Developed, Built, Designed).
        - Optimize for ATS.
        - Add missing professional wording.
        - Keep summary under 80 words.

        Return valid JSON only.
    `;
};
