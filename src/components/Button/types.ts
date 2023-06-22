import { HTMLProps, ReactNode } from "react";

export interface IButton extends HTMLProps<HTMLButtonElement> {
    text?: string,
    beforeIcon?: ReactNode,
    afterIcon?: ReactNode,
    variant?: buttonVariants,
    fill?: boolean
    load?: boolean
}


export type buttonVariants = 'violet-fill' | 'violet-outlined' | 'violet-simple' | 'violet-light'