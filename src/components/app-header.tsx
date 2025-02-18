import { Separator } from "@radix-ui/react-separator"
import { Search, Bell } from "lucide-react"
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbSeparator,
    BreadcrumbPage,
} from "./shadcn/breadcrumb"
import { Button } from "./shadcn/button"
import { SidebarTrigger } from "./shadcn/sidebar"
import { Input } from "./shadcn/input"
import { ThemeToggle } from "./theme-toggle"

export const AppHeader = () => {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <div className="flex w-full items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                            Trading
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Portfolio</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="grow" />
                <Input
                    className="max-w-xs"
                    icon={Search}
                    placeholder="Search..."
                />
                <ThemeToggle />
                <Button className="px-2" size="icon" variant="ghost">
                    <Bell className="size-4" />
                </Button>
            </div>
        </header>
    )
}
