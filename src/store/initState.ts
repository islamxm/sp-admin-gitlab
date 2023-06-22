import LOCAL_STORAGE from "../utils/localStorage";

const userData = LOCAL_STORAGE?.getItem('sochipark-gitlab-userdata')

interface I {
    token: any,
    userData: {
        isAdmin: any,
        name: any,
        role: any
    } | any
    sidebarState: boolean
}

const initState:I = {
    token: LOCAL_STORAGE?.getItem('sochipark-gitlab-token') ? LOCAL_STORAGE?.getItem('sochipark-gitlab-token') : null,
    sidebarState: false,
    userData: userData ? JSON.parse(userData) : null
}



export default initState;