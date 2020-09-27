const express = require("express")
const router = express.Router()
const { catchErrors } = require("../middlewares")

const { newShelfProcess, 
        addBook, 
        deleteShelfProcess, 
        seeUserShelfs,
        seeBooksShelf} = require("../controllers/shelfs")

////C
router.post("/shelfnew", catchErrors(newShelfProcess))

////R
router.get("/usershelfs", catchErrors(seeUserShelfs))
router.get("/booksshlef/:shelfId", catchErrors(seeBooksShelf))

////U

router.put("/addbook/:bookId", catchErrors(addBook))

////D
router.delete("/shelfdelete/:shelfId", catchErrors(deleteShelfProcess))

module.exports = router
