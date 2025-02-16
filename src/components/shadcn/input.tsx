import * as React from "react"

import { cn } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

type InputProps = React.ComponentProps<"input"> & {
    icon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, icon: Icon, type, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "relative flex h-9 w-full bg-transparent text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:font-medium file:text-foreground file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    className,
                )}
            >
                {Icon && (
                    <div className="absolute top-0 left-0 flex h-full items-center justify-center px-2 text-slate-600 text-sm">
                        <Icon size={16} />
                    </div>
                )}
                <input
                    className={cn(
                        "w-full rounded-md border border-input px-3 py-1",
                        {
                            "pl-7": Icon,
                        },
                    )}
                    type={type}
                    ref={ref}
                    {...props}
                />
            </div>
        )
    },
)
Input.displayName = "Input"

export { Input }
