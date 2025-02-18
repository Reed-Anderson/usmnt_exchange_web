import { SidebarInset, SidebarProvider } from "@/components/shadcn/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { AppHeader } from "@/components/app-header"
import { NetWorthCard } from "./net-worth-card"
import { PlayerHoldingsCard } from "./player-holdings-card"
import { CashAvailableCard } from "./cash-available-card"
import { RecentActivityCard } from "./recent-activity-card"

export default function PortfolioPage() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="h-dvh">
                <AppHeader />
                <div className="flex flex-col md:grid min-h-0 gap-4 p-4 md:grid-cols-[1fr_2fr_3fr] md:grid-rows-3">
                    <NetWorthCard />
                    <PlayerHoldingsCard />
                    <CashAvailableCard />
                    <RecentActivityCard />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
