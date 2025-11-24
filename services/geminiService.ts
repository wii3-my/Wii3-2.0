import { GoogleGenAI, Type } from "@google/genai";
import { CampaignStrategy, CampaignRequest } from "../types";

// We use a singleton pattern or lazy initialization to avoid accessing process.env 
// at the top level, which can crash the app in some browser environments if not polyfilled.
let ai: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!ai) {
    try {
      // Ensure we handle the potential ReferenceError if 'process' is not defined in the browser
      const apiKey = process.env.API_KEY;
      if (!apiKey) {
        throw new Error("API_KEY is missing from environment variables.");
      }
      ai = new GoogleGenAI({ apiKey: apiKey });
    } catch (error) {
      console.error("Failed to initialize Gemini client:", error);
      throw new Error("API Configuration Error. Please check your environment settings.");
    }
  }
  return ai;
};

export const generateCampaignStrategy = async (
  request: CampaignRequest
): Promise<CampaignStrategy> => {
  const modelId = "gemini-2.5-flash"; // Using Flash for speed/efficiency on text tasks

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
    throw error; // Re-throw to be caught by the component
  }
};