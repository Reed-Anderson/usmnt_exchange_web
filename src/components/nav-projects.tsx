"use client"

import {
    Folder,
    Forward,
    MoreHorizontal,
    Trash2,
    type LucideIcon,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import {
    SidebarMenuAction,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/shadcn/sidebar"

interface Project {
    name: string
    url: string
    icon: LucideIcon
}

interface NavProjectsProps {
    projects: Project[]
}

interface ProjectItemProps {
    project: Project
    isMobile: boolean
}

function ProjectItem(props: ProjectItemProps) {
    return (
        <SidebarMenuItem key={props.project.name}>
            <SidebarMenuButton asChild>
                <a href={props.project.url}>
                    <props.project.icon />
                    <span>{props.project.name}</span>
                </a>
            </SidebarMenuButton>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover>
                        <MoreHorizontal />
                        <span className="sr-only">More</span>
                    </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="w-48 rounded-lg"
                    side={props.isMobile ? "bottom" : "right"}
                    align={props.isMobile ? "end" : "start"}
                >
                    <DropdownMenuItem>
                        <Folder className="text-muted-foreground" />
                        <span>View Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Forward className="text-muted-foreground" />
                        <span>Share Project</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Trash2 className="text-muted-foreground" />
                        <span>Delete Project</span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    )
}
