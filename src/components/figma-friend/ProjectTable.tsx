import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const projects = [
  { id: "PROJ-001", name: "Website Redesign", client: "Tech Solutions Inc.", status: "In Progress", progress: 65, deadline: "2024-08-15" },
  { id: "PROJ-002", name: "Mobile App Development", client: "Creative Co.", status: "Completed", progress: 100, deadline: "2024-07-01" },
  { id: "PROJ-003", name: "Marketing Campaign", client: "Global Goods Ltd.", status: "On Hold", progress: 30, deadline: "2024-09-30" },
  { id: "PROJ-004", name: "E-commerce Platform", client: "Retail Kings", status: "Planning", progress: 10, deadline: "2024-11-01" },
  { id: "PROJ-005", name: "Brand Identity Design", client: "Startup Innovators", status: "In Progress", progress: 80, deadline: "2024-07-25" },
];

export function ProjectTable() {
  return (
    <div data-ai-hint="projects table">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Project Name</TableHead>
            <TableHead className="hidden md:table-cell">Client</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="hidden sm:table-cell">Progress</TableHead>
            <TableHead className="hidden md:table-cell">Deadline</TableHead>
            <TableHead><span className="sr-only">Actions</span></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id} className="transition-colors hover:bg-muted/50">
              <TableCell>
                <div className="font-medium text-foreground">{project.name}</div>
                <div className="text-xs text-muted-foreground md:hidden">{project.client}</div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">{project.client}</TableCell>
              <TableCell>
                <Badge 
                  variant={
                    project.status === "Completed" ? "default" : 
                    project.status === "In Progress" ? "secondary" : 
                    "outline"
                  }
                  className={
                    project.status === "Completed" ? "bg-green-500/20 text-green-700 border-green-500/30 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20" :
                    project.status === "In Progress" ? "bg-blue-500/20 text-blue-700 border-blue-500/30 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20" :
                    project.status === "On Hold" ? "bg-yellow-500/20 text-yellow-700 border-yellow-500/30 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/20" :
                    "bg-gray-500/20 text-gray-700 border-gray-500/30 dark:bg-gray-500/10 dark:text-gray-400 dark:border-gray-500/20"
                  }
                >
                  {project.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden sm:table-cell">
                <div className="flex items-center gap-2">
                  <Progress value={project.progress} className="h-2 w-20" aria-label={`${project.progress}% complete`} />
                  <span className="text-xs text-muted-foreground">{project.progress}%</span>
                </div>
              </TableCell>
              <TableCell className="hidden md:table-cell text-muted-foreground">{project.deadline}</TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">More actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive focus:text-destructive focus:bg-destructive/10">Delete Project</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
