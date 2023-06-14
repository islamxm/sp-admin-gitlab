import LOCAL_STORAGE from "../utils/localStorage";

interface I {
    token: any,
    sidebarState: boolean
}

const initState:I = {
    token: LOCAL_STORAGE?.getItem('sochi-park-gitlab-token') ? LOCAL_STORAGE?.getItem('sochi-park-gitlab-token') : null,
    sidebarState: false 
}



export default initState;