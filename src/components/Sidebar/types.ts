export interface ISidebarMenu {
    list?: ISidebarMenuItem[]
}

export interface ISidebarMenuItem {
    icon?:React.ReactNode,
    label?: string,
    count?: number,
    isActive?: boolean,
    link?: string,
    targetBlank?: boolean
}