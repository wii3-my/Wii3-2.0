// Define the structure for our AI-generated campaign strategy
export interface CampaignStrategy {
  conceptName: string;
  hook: string;
  targetAudienceAnalysis: string;
  influencerArchetypes: string[];
  suggestedPlatforms: string[];
  estimatedReach: string;
}

export interface CampaignRequest {
  brandName: string;
  industry: string;
  goal: string;
}

export enum NavSection {
  HOME = 'home',
  SERVICES = 'services',
  AI_TOOL = 'ai-tool',
  CONTACT = 'contact'
}