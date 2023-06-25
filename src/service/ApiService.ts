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


    getCreationData = async (token: any) => {
        try {
            let res = await fetch(endpoints.getCreationData, {
                method: "POST",
                headers: {
                    ...headers,
                    'Authorization': token
                }
            })
            const r = await checkAuth(res)
            return await r;
        } catch(err) {
            console.log(err)
        }
    }


    addTicket = async (token: any, body: {
        title: string,
        project_id: string,
        urgency_id: string,
        department_id: string,
        target_date: string,
        description: string
    }) => {
        try {
            let res = await fetch(endpoints.addTicket, {
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

    getEmps = async (token: any) => {
        try {
            let res = await fetch(endpoints.getEmps, {
                method: "POST",
                headers: {
                    ...headers,
                    'Authorization': token
                },
            })
            const r = await checkAuth(res)
            return await r;
        } catch(err) {
            console.log(err)
        }
    }

    editProjectEmps = async (token: any, body: {project_id: number | string, employees_id: number[]}) => {
        try {
            let res = await fetch(endpoints.editProjectMembers, {
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

    getTickets = async (token:any, body: any) => {
        try {
            let res = await fetch(endpoints.getTickets, {
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