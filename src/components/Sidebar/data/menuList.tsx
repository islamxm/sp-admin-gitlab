import { ISidebarMenuItem } from "../types";
import {FiLayers, FiGitlab, FiGlobe, FiUsers} from 'react-icons/fi';
import {LuCopyCheck, LuBarChartHorizontal} from 'react-icons/lu';


const menuList:ISidebarMenuItem[] = [
    {
        icon: <FiLayers/>,
        label: 'Проекты',
        link: '/projects'
    },
    {
        icon: <LuCopyCheck/>,
        label: 'Заявки в поддержку',
        link: '/states?status=0',
    },
    {
        icon: <FiGitlab/>,
        label: 'Открыть на Gitlab',
        link: 'https://gitlab.com',
        targetBlank: true
    },
    {
        icon: <FiUsers/>,
        label: 'Сотрудники',
        link: '/employees',
    },
    {
        icon: <LuBarChartHorizontal/>,
        label: 'Диаграмма',
        link: '/chart'
    }
]

export default menuList;