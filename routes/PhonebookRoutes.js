const router = require("express").Router();

const phonebookController = require("../controller/PhonebookControler");

router.get("/", phonebookController.read);

router.post("/", phonebookController.create );

router.put("/:id",phonebookController.update);

router.get("/:id", phonebookController.readbyId);

router.delete("/:id", phonebookController.del); 

module.exports = router;
