export const generateResumePrompt = (profile) => {
  return `
        You are an expert resume writer.
        Create a detailed, professional, ATS-friendly resume content in JSON format.
        
        Return ONLY valid JSON.

        Schema:

        {
            "summary": "",
            "skills": {
                technical: [],
                soft: [(max 5) if empty then remain it empty],
                tools: [(max 5) if empty then remain it empty],
            },
            "experience": [
                {
                "jobTitle": "",
                "company": "",
                "startDate": "",
                "endDate": "",
                "description": ["bullets"],
                "technologies": []
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

  //  "education": [
  //             {
  //             "institution": "",
  //             "degree": "",
  //             "year": ""
  //             }
  //         ]
};
