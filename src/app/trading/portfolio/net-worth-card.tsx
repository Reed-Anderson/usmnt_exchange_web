"use client"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/shadcn/card"
import {
    type ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/shadcn/chart"
import { CartesianGrid, XAxis, Area, AreaChart } from "recharts"

const chartData = [
    { month: "January", netWorth: 186 },
    { month: "February", netWorth: 305 },
    { month: "March", netWorth: 237 },
    { month: "April", netWorth: 73 },
    { month: "May", netWorth: 209 },
    { month: "June", netWorth: 214 },
]

const chartConfig = {
    netWorth: {
        label: "Net Worth",
    },
} satisfies ChartConfig

export const NetWorthCard = () => {
    return (
        <Card className="col-span-3 row-span-2 flex flex-col overflow-hidden rounded-xl">
            <CardHeader>
                <div className="text-muted-foreground">Net Worth</div>
                <div>
                    <div className="font-bold text-2xl">$1,275.88</div>
                    <CardDescription className="m-0">
                        <span className="text-green-600">+$75.88 (6.32%)</span>{" "}
                        since last month
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="min-h-0 text-green-300">
                <ChartContainer className="h-full w-full" config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="netWorth"
                            type="natural"
                            fillOpacity={0.4}
                            stroke="currentColor"
                            fill="currentColor"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
