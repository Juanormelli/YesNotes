
import { Router} from "express"
import { authRoutes } from "./auth.routes"
import { notesRouter } from "./notes.routes"
import { userRoutes } from "./user.routes"


const routes = Router()


routes.use("/users", userRoutes)
routes.use("/auth",authRoutes)
routes.use("/notes",notesRouter) 


export{routes}