import { InternalLink } from "@/components/internal-link"
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
    TableHeader,
    TableRow,
} from "@/components/shadcn/table"
import { cn, formatCurrency } from "@/lib/utils"

type PlayerHoldingRow = {
    player: string
    playerId: number
    position: string
    quantity: number
    averagePurchasePrice: number
    latestPrice: number
}

const tableData: PlayerHoldingRow[] = [
    {
        player: "Folarin Balogun",
        playerId: 1,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 10,
        latestPrice: 12,
    },
    {
        player: "Ricardo Pepi",
        playerId: 2,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 16,
        latestPrice: 18,
    },
    {
        player: "Josh Sargent",
        playerId: 3,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 15,
        latestPrice: 13,
    },
    {
        player: "Haji Wright",
        playerId: 4,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Brandon Vazquez",
        playerId: 5,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 8,
    },
    {
        player: "Jesus Ferreira",
        playerId: 6,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Duncan McGuire",
        playerId: 7,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Jordan Morris",
        playerId: 8,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Brian White",
        playerId: 9,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Daryl Dike",
        playerId: 10,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Jordon Pefok",
        playerId: 11,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Jeremy Ebobisse",
        playerId: 12,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Christian Pulisic",
        playerId: 13,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Gio Reyna",
        playerId: 14,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Brenden Aaronson",
        playerId: 15,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Tim Weah",
        playerId: 16,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Jordan Morris",
        playerId: 17,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Brian White",
        playerId: 18,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Daryl Dike",
        playerId: 19,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
    {
        player: "Jordon Pefok",
        playerId: 20,
        position: "Striker",
        quantity: 20,
        averagePurchasePrice: 20,
        latestPrice: 22,
    },
]

export const PlayerHoldingsCard = () => {
    return (
        <Card className="row-span-3 flex flex-col rounded-xl">
            <CardHeader>
                <CardTitle>Player Holdings</CardTitle>
                <CardDescription>
                    Current investments and their latest market values
                </CardDescription>
            </CardHeader>
            <CardContent className="h-full min-h-0 flex-1">
                <div className="h-full w-full rounded-md border">
                    <ScrollArea className="h-full w-full rounded-md">
                        <Table className="h-full text-xs 2xl:text-sm">
                            <TableHeader className="sticky top-0">
                                <TableRow className="text-muted-foreground">
                                    <TableCell>Total Value</TableCell>
                                    <TableCell>Player</TableCell>
                                    <TableCell>Position</TableCell>
                                    <TableCell>Qty</TableCell>
                                    <TableCell>Avg Cost</TableCell>
                                    <TableCell>Latest Price</TableCell>
                                    <TableCell>Change</TableCell>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tableData.map((row) => (
                                    <PlayerRow key={row.playerId} {...row} />
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </div>
            </CardContent>
        </Card>
    )
}

type PlayerRowProps = {
    playerId: number
    player: string
    position: string
    quantity: number
    averagePurchasePrice: number
    latestPrice: number
}

const PlayerRow = (props: PlayerRowProps) => {
    const isGain = props.latestPrice >= props.averagePurchasePrice
    const coloredText = cn({
        "text-red-600": !isGain,
        "text-green-600": isGain,
    })

    return (
        <TableRow key={props.playerId}>
            <TableCell>
                ${(props.latestPrice * props.quantity).toFixed(2)}
            </TableCell>
            <TableCell>
                <InternalLink
                    href={`/market/${props.position.toLowerCase()}s/${props.playerId}`}
                >
                    {props.player}
                </InternalLink>
            </TableCell>
            <TableCell>
                <InternalLink href={`/market/${props.position.toLowerCase()}s`}>
                    {props.position}
                </InternalLink>
            </TableCell>
            <TableCell>{props.quantity}</TableCell>
            <TableCell>${props.averagePurchasePrice}</TableCell>
            <TableCell>${props.latestPrice}</TableCell>
            <TableCell className={coloredText}>
                {formatCurrency(
                    (props.latestPrice - props.averagePurchasePrice) *
                    props.quantity,
                )}
            </TableCell>
        </TableRow>
    )
}
