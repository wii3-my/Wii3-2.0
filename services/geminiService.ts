import { GoogleGenAI, Type } from "@google/genai";
import { CampaignStrategy, CampaignRequest } from "../types";

// Initialize the client. 
// Note: We access process.env.API_KEY directly as per requirements.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

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
    const response = await ai.models.generateContent({
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
    throw new Error("Failed to generate campaign strategy. Please try again.");
  }
};