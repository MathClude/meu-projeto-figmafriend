import { Button } from "@/components/ui/button";
import { PlusCircle, UploadCloud, BarChartHorizontalBig, UserPlus } from "lucide-react";

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-2" data-ai-hint="actions dashboard">
      <Button variant="outline" className="flex flex-col sm:flex-row items-center justify-start gap-2 p-3 h-auto text-left transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md">
        <PlusCircle className="h-5 w-5 text-primary shrink-0" />
        <div>
          <span className="font-medium">New Project</span>
          <p className="text-xs text-muted-foreground hidden sm:block">Start a new design project.</p>
        </div>
      </Button>
      <Button variant="outline" className="flex flex-col sm:flex-row items-center justify-start gap-2 p-3 h-auto text-left transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md">
        <UploadCloud className="h-5 w-5 text-primary shrink-0" />
         <div>
          <span className="font-medium">Import File</span>
          <p className="text-xs text-muted-foreground hidden sm:block">Upload Figma or Sketch files.</p>
        </div>
      </Button>
      <Button variant="outline" className="flex flex-col sm:flex-row items-center justify-start gap-2 p-3 h-auto text-left transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md">
        <BarChartHorizontalBig className="h-5 w-5 text-primary shrink-0" />
        <div>
          <span className="font-medium">View Reports</span>
          <p className="text-xs text-muted-foreground hidden sm:block">Access analytics and insights.</p>
        </div>
      </Button>
      <Button variant="outline" className="flex flex-col sm:flex-row items-center justify-start gap-2 p-3 h-auto text-left transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-md">
        <UserPlus className="h-5 w-5 text-primary shrink-0" />
        <div>
          <span className="font-medium">Invite Team</span>
          <p className="text-xs text-muted-foreground hidden sm:block">Add collaborators to projects.</p>
        </div>
      </Button>
    </div>
  );
}
