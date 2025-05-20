"use server";

import { generateTheme, type GenerateThemeInput, type GenerateThemeOutput } from "@/ai/flows/generate-theme";
import { z } from "zod";

const HandleGenerateThemeInputSchema = z.object({
  figmaFileUrl: z.string().url({ message: "Please enter a valid Figma file URL." }),
  emotionalTone: z.string().min(1, { message: "Please select an emotional tone." }),
});

export interface ActionState {
  success: boolean;
  message?: string;
  data?: GenerateThemeOutput;
  errors?: {
    figmaFileUrl?: string[];
    emotionalTone?: string[];
    server?: string[];
  };
}

export async function handleGenerateTheme(
  prevState: ActionState | null,
  formData: FormData
): Promise<ActionState> {
  const validatedFields = HandleGenerateThemeInputSchema.safeParse({
    figmaFileUrl: formData.get("figmaFileUrl"),
    emotionalTone: formData.get("emotionalTone"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Validation failed. Please check your inputs.",
    };
  }

  const input: GenerateThemeInput = validatedFields.data;

  try {
    console.log("Calling generateTheme with input:", input);
    const output = await generateTheme(input);
    console.log("AI generated theme:", output);
    
    // Basic validation of AI output structure
    if (
      !output ||
      !output.colorScheme ||
      !output.colorScheme.primaryColor ||
      !output.colorScheme.secondaryColor ||
      !output.colorScheme.accentColor ||
      !output.colorScheme.backgroundColor
    ) {
      console.error("AI output is malformed:", output);
      return {
        success: false,
        message: "AI returned an unexpected theme structure. Please try again.",
        errors: { server: ["AI output malformed."] },
      };
    }
    
    return {
      success: true,
      data: output,
      message: "Theme generated successfully!",
    };
  } catch (error) {
    console.error("Error generating theme:", error);
    let errorMessage = "An unexpected error occurred while generating the theme.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      success: false,
      message: errorMessage,
      errors: { server: [errorMessage] },
    };
  }
}
