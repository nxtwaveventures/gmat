import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white shadow hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 hover:shadow-lg",
                destructive: "bg-gradient-to-r from-red-600 via-red-500 to-red-600 text-white shadow hover:from-red-700 hover:via-red-600 hover:to-red-700 hover:shadow-lg",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 text-white shadow hover:from-gray-700 hover:via-gray-600 hover:to-gray-700 hover:shadow-lg",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
                success: "bg-gradient-to-r from-green-600 via-green-500 to-green-600 text-white shadow hover:from-green-700 hover:via-green-600 hover:to-green-700 hover:shadow-lg",
                premium: "bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-white shadow hover:from-purple-700 hover:via-purple-600 hover:to-purple-700 hover:shadow-lg",
                cta: "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white shadow-lg hover:from-blue-700 hover:via-purple-700 hover:to-blue-700 hover:shadow-xl text-base font-semibold",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-12 rounded-md px-8 text-base",
                xl: "h-14 rounded-md px-10 text-lg",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants } 