import {FC} from 'react'

const MainWrapper:FC<{children?: React.ReactNode}> = ({children}) => {

    return (
        <>
            {children}
        </>
    )
}

export default MainWrapper;