const express = require("express")
const router = express.Router()
const { catchErrors } = require("../middlewares")

const { newQuoteProcess,
        updateQuoteProcess,
        deleteQuoteProcess } = require("../controllers/quotes")

////C
router.post("/quote/:bookId", catchErrors(newQuoteProcess))

////R

////U
router.put("/quoteupdate/:quoteId", catchErrors(updateQuoteProcess))

////D
router.delete("/quotedelete/:quoteId", catchErrors(deleteQuoteProcess))

module.exports = router