import LOCAL_STORAGE from "./localStorage";

const checkAuth = (res: Response) => {
    if(res?.status === 401 || res?.status === 403) {
        LOCAL_STORAGE.removeItem('sochipark-gitlab-token')
        window.location.replace('/auth')
    } else {
        return res?.json()
    }
}

export default checkAuth;