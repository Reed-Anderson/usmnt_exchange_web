"use client"

import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shadcn/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/shadcn/sidebar"

interface User {
    name: string
    email: string
    avatar: string
}

interface UserAvatarProps {
    user: User
}

interface UserInfoProps {
    user: User
}

interface UserDropdownMenuProps {
    user: User
}

interface NavUserProps {
    user: User
}

function UserAvatar(props: UserAvatarProps) {
    return (
        <Avatar className="h-8 w-8 rounded-lg">
            <AvatarImage src={props.user.avatar} alt={props.user.name} />
            <AvatarFallback className="rounded-lg">CN</AvatarFallback>
        </Avatar>
    )
}

function UserInfo(props: UserInfoProps) {
    return (
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{props.user.name}</span>
            <span className="truncate text-xs">{props.user.email}</span>
        </div>
    )
}

function UserDropdownMenu(props: UserDropdownMenuProps) {
    const { isMobile } = useSidebar()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <UserAvatar user={props.user} />
                    <UserInfo user={props.user} />
                    <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
            >
                <DropdownMenuLabel className="p-0 font-normal">
                    <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                        <UserAvatar user={props.user} />
                        <UserInfo user={props.user} />
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <BadgeCheck />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard />
                        Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Bell />
                        Notifications
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export function NavUser(props: NavUserProps) {
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <UserDropdownMenu user={props.user} />
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
