import {FC} from 'react'
import PageLayout from '../PageLayout/PageLayout';
const MainWrapper:FC<{children?: React.ReactNode}> = ({children}) => {

    return (
        <PageLayout>

            {children}
        </PageLayout>
    )
}

export default MainWrapper;