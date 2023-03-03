import { createBrowserRouter } from "react-router-dom"
import Education from "./education/education";
import Experience from "./experience/experience";
import Home from "./home/home";
import Projects from "./projects/projects";
import Skills from "./skills/skills";

const router = createBrowserRouter([
       {
            path: "/",
            element:<Home />
        },
        {
            path: "/skills",
            element: <Skills />
        },
        {
            path: "/education",
            element: <Education />
        },
        {
            path: "/experience",
            element:<Experience />
        },
        {
            path:"/projects",
            element:<Projects />
        }
])




export default router