import{ Router} from "express"
import { CreateNotesController } from "../../../modules/notes/useCases/createNotes/CreateNotesController"
import { DeleteNotesController } from "../../../modules/notes/useCases/deleteNotes/DeleteNotesController"
import { ListNoteController } from "../../../modules/notes/useCases/listNotes/ListNotesController"
import { ListOneNoteController } from "../../../modules/notes/useCases/listOneNote/ListOneNoteController"
import { UpdateNotesController } from "../../../modules/notes/useCases/updateNotes/UpdateNotesController"




const createNotesUserController = new CreateNotesController()
const updateNotesUserController = new UpdateNotesController()


const listNotesController = new ListNoteController()

const listOneNoteController = new ListOneNoteController()

const deleteNotesController = new DeleteNotesController()


const notesRouter = Router()

notesRouter.post("/create/:user_id",createNotesUserController.handle)
notesRouter.get("/list/:user_id",listNotesController.handle)
notesRouter.delete("/delete/:user_id",deleteNotesController.handle)
notesRouter.get("/list/:user_id/:id",listOneNoteController.handle)
notesRouter.post("/update/:id",updateNotesUserController.handle)



export {notesRouter}