export interface IStatus {
    variant?: statusVariants,

    title?: string,
    id?: number | string,
    color?: string
}

export type statusVariants = 'open' | 'close'