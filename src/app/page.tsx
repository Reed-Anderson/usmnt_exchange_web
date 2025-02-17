import { Button } from "@/components/shadcn/button"
import { AppSidebar } from "../components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/shadcn/breadcrumb"
import { Input } from "@/components/shadcn/input"
import { Separator } from "@/components/shadcn/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/shadcn/sidebar"
import { Bell, Search } from "lucide-react"
import { Card } from "@/components/shadcn/card"

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex w-full items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator
                            orientation="vertical"
                            className="mr-2 h-4"
                        />
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
                        <Button className="px-2" variant="ghost">
                            <Bell className="size-4" />
                        </Button>
                    </div>
                </header>
                <div className="grid h-full gap-4 p-4 md:grid-cols-3 md:grid-rows-3">
                    <Card className="col-span-2 row-span-2 rounded-xl">
                        <div className="p-6 pb-2">Net Worth</div>
                        <div className="px-6 font-bold text-2xl">$1,275.88</div>
                        <div className="px-6 text-muted-foreground text-sm">
                            +$75.88 (6.32%) since last month
                        </div>
                    </Card>
                    <Card className="row-span-3 rounded-xl">
                        <div className="p-6 pb-2">Player Holdings</div>
                    </Card>
                    <Card className="min-h-[100vh] rounded-xl md:min-h-min">
                        <div className="p-6 pb-2">Cash Available</div>
                    </Card>
                    <Card className="min-h-[100vh] rounded-xl md:min-h-min">
                        <div className="p-6 pb-2">Recent Activity</div>
                    </Card>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
