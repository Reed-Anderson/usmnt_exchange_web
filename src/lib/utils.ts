import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/* Function to show $ with positive or negative numbers */
export const formatCurrency = (value: number) => {
    return value > 0
        ? `$${value.toFixed(2)}`
        : `(-$${Math.abs(value).toFixed(2)})`
}
