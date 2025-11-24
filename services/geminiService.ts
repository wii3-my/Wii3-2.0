import { GoogleGenAI, Type } from "@google/genai";
import { CampaignStrategy, CampaignRequest } from "../types";

let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    // Vite replaces process.env.API_KEY with the actual value at build time
    // If usage of 'process' throws an error in your editor, it is likely a linting issue, 
    // but it will work in the build because of vite.config.ts define.
    const apiKey = import.meta.env.VITE_API_KEY;

    if (!apiKey) {
      console.error("API_KEY is missing. Ensure it is set in your Vercel Environment Variables.");
      throw new Error("API Configuration Error. API_KEY is missing.");
    }

    try {
      ai = new GoogleGenAI({ apiKey: apiKey });
    } catch (error) {
      console.error("Failed to initialize Gemini client:", error);
      throw new Error("Failed to initialize AI client.");
    }
  }
  return ai;
};

export const generateCampaignStrategy = async (
  request: CampaignRequest
): Promise<CampaignStrategy> => {
  const modelId = "gemini-2.5-flash";

  const prompt = `
    Act as a world-class Influencer Marketing Strategist for the agency 'wii3'.
    Create a high-impact, viral marketing campaign concept for a brand with the following details:
    - Brand Name: ${request.brandName}
    - Industry: ${request.industry}
    - Primary Goal: ${request.goal}

    Be specific, bold, and modern. Avoid generic advice. Focus on Web3, Gen Z, or high-conversion tactics.
  `;

  try {
    const client = getAiClient();
    const response = await client.models.generateContent({
      model: modelId,
      contents: prompt,
      config: {
        systemInstruction: "You are a creative director at a top-tier marketing agency. Your tone is professional, energetic, and concise.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conceptName: { type: Type.STRING, description: "A catchy, short title for the campaign." },
            hook: { type: Type.STRING, description: "The core emotional or logical hook that drives engagement." },
            targetAudienceAnalysis: { type: Type.STRING, description: "Brief analysis of who we are targeting and why." },
            influencerArchetypes: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of 3 types of influencers (e.g., 'Tech Reviewers', 'Lifestyle Vloggers')." 
            },
            suggestedPlatforms: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of best platforms (e.g., TikTok, Instagram Reels)." 
            },
            estimatedReach: { type: Type.STRING, description: "A hypothetical reach projection (e.g., '1.5M - 2M Impressions')." }
          },
          required: ["conceptName", "hook", "targetAudienceAnalysis", "influencerArchetypes", "suggestedPlatforms", "estimatedReach"]
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as CampaignStrategy;
    } else {
      throw new Error("No text returned from Gemini");
    }
  } catch (error) {
    console.error("Error generating strategy:", error);
    throw error;
  }
};