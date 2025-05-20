
"use client";

import { useEffect, useRef, useState, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { handleGenerateTheme, type ActionState } from "@/lib/actions";
import { useToast } from "@/hooks/use-toast";
import { hexToHslString, hexToHsl } from "@/lib/colors";
import { Loader2, Wand2 } from "lucide-react";

const initialState: ActionState = {
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Theme
    </Button>
  );
}

export function ThemeControls() {
  const [state, formAction] = useActionState(handleGenerateTheme, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [generatedColors, setGeneratedColors] = useState<ActionState['data'] | null>(null);

  useEffect(() => {
    if (state?.message) {
      toast({
        title: state.success ? "Success" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
    }

    if (state?.success && state.data) {
      setGeneratedColors(state.data);
      const { primaryColor, secondaryColor, accentColor, backgroundColor } = state.data.colorScheme;
      
      document.documentElement.style.setProperty('--primary', hexToHslString(primaryColor));
      document.documentElement.style.setProperty('--secondary', hexToHslString(secondaryColor));
      document.documentElement.style.setProperty('--accent', hexToHslString(accentColor));
      document.documentElement.style.setProperty('--background', hexToHslString(backgroundColor));

      // Dynamically adjust foreground for better contrast with the new background
      const bgHsl = hexToHsl(backgroundColor);
      const newForeground = bgHsl.l > 60 ? '0 0% 20%' : '0 0% 98%'; // Dark text for light bg, light for dark
      document.documentElement.style.setProperty('--foreground', newForeground);
      
      // Card background and foreground relative to new background/foreground
      const cardBgLightness = Math.min(bgHsl.l + 5, 100); // Slightly lighter than bg
      const cardFg = newForeground;
      document.documentElement.style.setProperty('--card', `${bgHsl.h} ${bgHsl.s}% ${cardBgLightness}%`);
      document.documentElement.style.setProperty('--card-foreground', cardFg);
      
      // Muted foreground based on new foreground
      const fgHsl = hexToHsl(newForeground === '0 0% 20%' ? '#333333' : '#FAFAFA'); // Convert fixed values to HSL
      const mutedFgLightness = fgHsl.l > 50 ? Math.max(fgHsl.l - 20, 0) : Math.min(fgHsl.l + 30, 100);
      document.documentElement.style.setProperty('--muted-foreground', `${fgHsl.h} ${fgHsl.s}% ${mutedFgLightness}%`);

      // Reset form if needed, or keep values
      // formRef.current?.reset(); // Optional: clear form on success
    }
  }, [state, toast]);

  const emotionalTones = ["Calm", "Energetic", "Professional", "Playful", "Minimalist", "Luxurious"];

  return (
    <Card className="border-0 shadow-none bg-transparent">
      <CardContent className="p-2">
        <form action={formAction} ref={formRef} className="space-y-4">
          <div>
            <Label htmlFor="figmaFileUrl" className="text-xs">Figma File URL</Label>
            <Input
              id="figmaFileUrl"
              name="figmaFileUrl"
              type="url"
              placeholder="https://figma.com/file/..."
              className="mt-1 h-9 text-xs"
              defaultValue="https://www.figma.com/file/your-file-id/example-design"
            />
            {state?.errors?.figmaFileUrl && (
              <p className="mt-1 text-xs text-destructive">{state.errors.figmaFileUrl.join(", ")}</p>
            )}
          </div>
          <div>
            <Label htmlFor="emotionalTone" className="text-xs">Emotional Tone</Label>
            <Select name="emotionalTone" defaultValue="Professional">
              <SelectTrigger id="emotionalTone" className="mt-1 h-9 text-xs">
                <SelectValue placeholder="Select a tone" />
              </SelectTrigger>
              <SelectContent>
                {emotionalTones.map(tone => (
                  <SelectItem key={tone} value={tone} className="text-xs">{tone}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state?.errors?.emotionalTone && (
              <p className="mt-1 text-xs text-destructive">{state.errors.emotionalTone.join(", ")}</p>
            )}
          </div>
          {state?.errors?.server && (
             <p className="mt-1 text-xs text-destructive">{state.errors.server.join(", ")}</p>
          )}
          <SubmitButton />
        </form>
        {generatedColors && (
          <div className="mt-4 space-y-2 text-xs">
            <p className="font-medium">Generated Colors:</p>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: generatedColors.colorScheme.primaryColor }}></span>
              Primary: {generatedColors.colorScheme.primaryColor}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: generatedColors.colorScheme.secondaryColor }}></span>
              Secondary: {generatedColors.colorScheme.secondaryColor}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: generatedColors.colorScheme.accentColor }}></span>
              Accent: {generatedColors.colorScheme.accentColor}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: generatedColors.colorScheme.backgroundColor }}></span>
              Background: {generatedColors.colorScheme.backgroundColor}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
