import{ Router} from "express"
import { CreateNotesController } from "../../../modules/notes/useCases/createNotes/CreateNotesController"
import { ListNoteController } from "../../../modules/notes/useCases/listNotes/ListNotesController"




const createNotesUserController = new CreateNotesController()

const listNotesController = new ListNoteController()

const notesRouter = Router()

notesRouter.post("/create/:user_id",createNotesUserController.handle)
notesRouter.get("/list/:user_id",listNotesController.handle)


export {notesRouter}