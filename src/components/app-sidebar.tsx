"use client"

import type * as React from "react"
import { Handshake, Store, Command, ChartCandlestick } from "lucide-react"
import { NavMain } from "./nav-main"
import { NavUser } from "./nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from "@/components/shadcn/sidebar"

const data = {
    user: {
        name: "Reed (Admin)",
        email: "usmnt-exchange@gmail.com",
        avatar: "https://cdn.vox-cdn.com/thumbor/an9IbQhxd5nGX5aWSNwIuzNL86c=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24377853/1458514159.jpg",
    },
    navMain: [
        {
            title: "Trading",
            url: "#",
            icon: ChartCandlestick,
            isActive: true,
            items: [
                {
                    title: "Portfolio",
                    url: "/trading/portfolio",
                },
                {
                    title: "Trade History",
                    url: "#",
                },
                {
                    title: "Dividends",
                    url: "#",
                },
                {
                    title: "Market Trends",
                    url: "#",
                },
            ],
        },
        {
            title: "Market",
            url: "#",
            icon: Store,
            isActive: true,
            items: [
                {
                    title: "Strikers",
                    url: "#",
                },
                {
                    title: "Attackers",
                    url: "#",
                },
                {
                    title: "Center Mids",
                    url: "#",
                },
                {
                    title: "Fullbacks",
                    url: "#",
                },
                {
                    title: "Centerbacks",
                    url: "#",
                },
                {
                    title: "Goalkeepers",
                    url: "#",
                },
            ],
        },
        {
            title: "Community",
            url: "#",
            icon: Handshake,
            isActive: true,
            items: [
                {
                    title: "Leaderboard",
                    url: "#",
                },
                {
                    title: "Blog",
                    url: "#",
                },
                {
                    title: "IPOs",
                    url: "#",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader className="flex flex-row items-center">
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                        <Command className="size-4" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-semibold">USMNT</span>
                        <span className="truncate text-xs">Exchange</span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
