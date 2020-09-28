const express = require("express")
const router = express.Router()
const { catchErrors } = require("../middlewares")

const { newShelfProcess, 
        addBook, 
        deleteShelfProcess, 
        seeBooksShelf,
        seeUserShelves,
        removeBook} = require("../controllers/shelves")

////C
router.post("/shelfnew", catchErrors(newShelfProcess))

////R
router.get("/usershelves", catchErrors(seeUserShelves))
router.get("/booksshlef/:shelfId", catchErrors(seeBooksShelf))

////U
router.put("/addbook/:bookId", catchErrors(addBook))
router.put("/removebook/:bookId", catchErrors(removeBook))

////D
router.delete("/shelfdelete/:shelfId", catchErrors(deleteShelfProcess))

module.exports = router
