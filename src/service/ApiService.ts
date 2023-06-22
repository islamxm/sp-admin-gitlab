import checkAuth from "../utils/checkAuth";
import endpoints from "./endpoints";

const headers = {
    'Content-type': 'application/json',
    'Accept': 'application/json'
}


class ApiService {
    login = async (body: {login: string, password: string}) => {
        try {
            let res = await fetch(endpoints.login, {
                method: 'POST',
                headers,
                body: JSON.stringify(body)
            })
            return await res?.json()
        } catch(err) {console.log(err)}
    }

    getProjects = async (token: any) => {
        try {
            let res = await fetch(endpoints.getProjects, {
                method: "POST",
                headers: {
                    // ...headers,
                    'Authorization': token
                }
            }) 
            const r = await checkAuth(res)
            return await r;
        } catch(err) {
            console.log(err)
        }
    }


    addProject = async (token: any, body: {
        gitlab_id: string,
        employees_id?: number[]
    }) => {
        try {
            let res = await fetch(endpoints.addProject, {
                method: "POST",
                headers: {
                    ...headers,
                    'Authorization': token
                },
                body: JSON.stringify(body)
            })
            const r = await checkAuth(res)
            return await r;
        } catch(err) {
            console.log(err)
        }
    }

}

export default ApiService;