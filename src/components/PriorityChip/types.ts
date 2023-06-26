export interface IPrChip {
    variant?: priorityVariants,

    title?: string,
    color_text?: string,
    color_bg?: string
    id?: number | string
}

export type priorityVariants = 'low' | 'medium' | 'high'