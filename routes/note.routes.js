const express = require("express")
const router = express.Router()
const { catchErrors } = require("../middlewares")

const { newNoteProcess, 
        updateNoteProcess, 
        deleteNoteProcess} = require("../controllers/notes")

////C
router.post("/note/:bookId", catchErrors(newNoteProcess))

////R

////U
router.put("/noteupdate/:noteId", catchErrors(updateNoteProcess))

////D
router.delete("/notedelete/:noteId", catchErrors(deleteNoteProcess))

module.exports = router