import{ Router} from "express"
import { CreateNotesController } from "../../../modules/notes/useCases/createNotes/CreateNotesController"




const createNotesUserController = new CreateNotesController()

const notesRouter = Router()

notesRouter.post("/create/:user_id",createNotesUserController.handle)


export {notesRouter}