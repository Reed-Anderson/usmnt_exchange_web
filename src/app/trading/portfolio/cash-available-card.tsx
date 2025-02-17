import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/card"

export const CashAvailableCard = () => {
    return (
        <Card className="min-h-[100vh] rounded-xl md:min-h-min">
            <CardHeader>
                <CardTitle>Cash Available</CardTitle>
                <CardDescription>
                    Funds available for investments
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center gap-4 px-10">
                <div className="flex flex-col">
                    <div className="font-bold text-4xl">$1,200</div>
                    <div className="text-muted-foreground text-sm">
                        Ready to Invest
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="font-bold text-4xl">$0</div>
                    <div className="text-muted-foreground text-sm">
                        Pending Purchases
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
