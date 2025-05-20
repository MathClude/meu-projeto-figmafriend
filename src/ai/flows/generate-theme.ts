// src/ai/flows/generate-theme.ts
'use server';
/**
 * @fileOverview Generates alternative color schemes for a Figma design based on different emotional tones.
 *
 * - generateTheme - A function that takes a Figma file URL and an emotional tone, and returns a color scheme.
 * - GenerateThemeInput - The input type for the generateTheme function.
 * - GenerateThemeOutput - The return type for the generateTheme function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateThemeInputSchema = z.object({
  figmaFileUrl: z.string().describe('The URL of the Figma design file.'),
  emotionalTone: z.string().describe('The desired emotional tone for the color scheme (e.g., calm, energetic, professional).'),
});
export type GenerateThemeInput = z.infer<typeof GenerateThemeInputSchema>;

const GenerateThemeOutputSchema = z.object({
  colorScheme: z.object({
    primaryColor: z.string().describe('The primary color in the generated color scheme.'),
    secondaryColor: z.string().describe('The secondary color in the generated color scheme.'),
    accentColor: z.string().describe('The accent color in the generated color scheme.'),
    backgroundColor: z.string().describe('The background color in the generated color scheme.'),
  }).describe('The generated color scheme.'),
});
export type GenerateThemeOutput = z.infer<typeof GenerateThemeOutputSchema>;

export async function generateTheme(input: GenerateThemeInput): Promise<GenerateThemeOutput> {
  return generateThemeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThemePrompt',
  input: {schema: GenerateThemeInputSchema},
  output: {schema: GenerateThemeOutputSchema},
  prompt: `You are an AI-powered theme generator that analyzes Figma design files and generates alternative color schemes based on different emotional tones.

  Analyze the Figma design file at the following URL: {{{figmaFileUrl}}}
  Generate a color scheme with the following emotional tone: {{{emotionalTone}}}

  Return the color scheme in the following JSON format:
  {
    "colorScheme": {
      "primaryColor": "",
      "secondaryColor": "",
      "accentColor": "",
      "backgroundColor": ""
    }
  }`,
});

const generateThemeFlow = ai.defineFlow(
  {
    name: 'generateThemeFlow',
    inputSchema: GenerateThemeInputSchema,
    outputSchema: GenerateThemeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
