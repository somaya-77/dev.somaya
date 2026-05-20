export interface ProjectStack {
    name: string;
}

export interface ProjectItem {
    num: string;
    category: "frontend" | "full-stack" | "backend"; 
    title: string;
    description: string;
    demo?: string; 
    github: string;
    stack: ProjectStack[];
    image: string;
    status?: "progress" | "completed"; 
}