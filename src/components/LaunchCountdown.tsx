import { useState, useEffect } from "react"
import { Card } from "./ui/card"

export function LaunchCountdown() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    useEffect(() => {
        // Set launch date to 5 days from now
        // In a real app, this would be a specific fixed date string
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 5)

        // For consistent demo behavior, let's fix the date locally if it were a real fixed launch
        // const targetDate = new Date("2024-01-01T00:00:00") 

        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference <= 0) {
                clearInterval(interval)
                return
            }

            const days = Math.floor(difference / (1000 * 60 * 60 * 24))
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((difference % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-center">
            <TimeUnit value={timeLeft.days} label="Jours" />
            <TimeUnit value={timeLeft.hours} label="Heures" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Secondes" />
        </div>
    )
}

function TimeUnit({ value, label }: { value: number; label: string }) {
    return (
        <Card className="flex flex-col items-center justify-center p-3 w-20 h-20 md:w-24 md:h-24 bg-background/50 backdrop-blur-sm border-primary/20 shadow-sm rounded-2xl">
            <span className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-primary to-purple-600 font-mono">
                {value.toString().padStart(2, '0')}
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase font-medium tracking-wider">
                {label}
            </span>
        </Card>
    )
}
