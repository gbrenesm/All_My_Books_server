const express = require("express")
const router = express.Router()
const { catchErrors } = require("../middlewares")

const { newBookProcess, 
        upadateBookProcess, 
        deleteBookProcess,
        seeUserBooks} = require("../controllers/books")

////C
router.post("/newbook", catchErrors(newBookProcess))

////R
router.get("/userbooks", catchErrors(seeUserBooks))

////U
router.put("/updatebook/:bookId", catchErrors(upadateBookProcess))

////D
router.delete("/deletebook/:bookId", catchErrors(deleteBookProcess))


module.exports = router