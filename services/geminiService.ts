import { GoogleGenAI, Type } from "@google/genai";
import { CandidateProfile } from "../types";

// Initialize Gemini
// Note: process.env.API_KEY is injected by the environment.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCandidateProfile = async (jobTitle: string): Promise<CandidateProfile> => {
  try {
    const model = "gemini-3-flash-preview";
    
    const prompt = `
      Act as "Scout", an elite AI recruiting assistant. 
      Generate a brief ideal candidate profile for the job role: "${jobTitle}".
      
      Return the data in a structured JSON format with:
      - role (string): The normalized job title.
      - summary (string): A 2-sentence executive summary of the ideal candidate persona.
      - keySkills (array of strings): Top 5 must-have hard/soft skills.
      - suggestedQuestions (array of strings): 3 strategic interview questions to ask.
    `;

    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING },
            summary: { type: Type.STRING },
            keySkills: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            suggestedQuestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["role", "summary", "keySkills", "suggestedQuestions"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Scout AI");

    return JSON.parse(text) as CandidateProfile;

  } catch (error) {
    console.error("Scout AI Error:", error);
    // Fallback data for demo purposes if API fails or key is missing
    return {
      role: jobTitle,
      summary: "Unable to connect to Scout AI brain. Please check API Key configuration.",
      keySkills: ["System Design", "Problem Solving", "Communication"],
      suggestedQuestions: ["Describe a challenging project you managed."]
    };
  }
};