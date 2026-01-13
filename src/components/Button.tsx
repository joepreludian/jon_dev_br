import React from 'react'
import {Link} from "@tanstack/react-router";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    to: string
    target?: string
}

export default function Button({children, className = '', to, ...props}: ButtonProps) {
    return (
        <Link to={to} {...props as any}>
            <button
                className={` site-box text-site-primary hover:bg-site-accent hover:text-black transition-colors ${className} flex items-center gap-2 cursor-pointer`}
                {...props}
            >
            {children}
            </button>
        </Link>
    )
}
