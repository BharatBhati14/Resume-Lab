import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config';


export const generateGeminiResumeContent = async (prompt) => {
    const genAI = new GoogleGenerativeAI(
      process.env.GEMINI_API_KEY
    );
    
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

    const fullPrompt = `${prompt}\n\nRespond ONLY with valid JSON. Do not use markdown code blocks.`;
    
    const result = await model.generateContent(fullPrompt);

    return result.response.text();
    // return result.response.text();
}

// class GeminiProvider {
//   async generate(prompt) {
//     const result = await model.generateContent(prompt);

//     return result.response.text();
//   }
// }
