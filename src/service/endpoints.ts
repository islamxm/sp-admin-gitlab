export const BASE_DOMAIN = 'https://soultri.site'
export const API_PATH = `${BASE_DOMAIN}/sochi_park_gitlab/api/`


const endpoints = {
    login: `${API_PATH}login.php`,


    getProjects: `${API_PATH}projects/get_projects.php`,
    addProject: `${API_PATH}projects/create_project.php`,
    editProjectMembers: `${API_PATH}projects/change_project_members.php`,


    getCreationData: `${API_PATH}tickets/get_creation_data.php`,
    addTicket: `${API_PATH}tickets/create_ticket.php`,
    linkTicket: `${API_PATH}tickets/link_ticket.php`,
    closeTicket: `${API_PATH}tickets/close_ticket.php`,
    editUrgency: `${API_PATH}tickets/change_urgency.php`,
    editAssignee: `${API_PATH}tickets/change_assignee.php`,
    setWorkStatus: `${API_PATH}tickets/set_work_status.php`,
    sendMessage: `${API_PATH}tickets/send_message.php`,


    getEmps: `${API_PATH}employees/get_employees.php`,
    getTickets: `${API_PATH}tickets/get_tickets.php`,
    getTicket: `${API_PATH}tickets/get_ticket.php`,

    replyMessage: `${API_PATH}tickets/send_message.php`,

    getDiagram: `${API_PATH}gant_diagram.php`,
    



}

export default endpoints;