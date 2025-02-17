import { Badge } from "@/components/shadcn/badge"
import { Button } from "@/components/shadcn/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/shadcn/card"
import { ScrollArea } from "@/components/shadcn/scroll-area"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@/components/shadcn/table"
import { BookPlus } from "lucide-react"

export const RecentActivityCard = () => {
    const valArr: number[] = []
    for (let i = 0; i < 15; i++) {
        valArr.push(Math.random())
    }
    return (
        <Card className="col-span-2 flex flex-col rounded-xl">
            <CardHeader className="flex-row items-center space-y-0">
                <div className="flex grow flex-col gap-1">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                        Latest transactions and dividends earned
                    </CardDescription>
                </div>
                <Button className="m-0" variant="outline">
                    View Full History
                </Button>
            </CardHeader>
            <CardContent className="min-h-0 shrink grow">
                <ScrollArea className="h-full rounded-xl border">
                    <Table>
                        <TableBody>
                            {valArr.map((val) => (
                                <TableRow key={val}>
                                    <TableCell>
                                        <BookPlus />
                                    </TableCell>
                                    <TableCell>Giovanni Reyna</TableCell>
                                    <TableCell>$150</TableCell>
                                    <TableCell>8.32 Units</TableCell>
                                    <TableCell>
                                        <Badge className="bg-gray-600">
                                            Pending
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
    )
}
