import { Schedule,Profile } from "@/modules"



export const routesConfig = [
    {
        path: "/teacher-panel/schedule",
        label: "Dars jadvali",
        element: Schedule,

    },
    {
        path: "/teacher-panel/profile",
        label: "profil",
        element:Profile,

    },
]