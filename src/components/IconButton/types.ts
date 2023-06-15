export interface IIconButton extends React.HTMLProps<HTMLButtonElement> {
    icon?: React.ReactNode,
    variant?: iconButtonTypes,
    type?: "button" | "submit" | "reset"
}

export type iconButtonTypes = 'violet-fill' | 'violet-outline' | 'violet-simple' | 'danger-simple'