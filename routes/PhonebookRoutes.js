const router = require("express").Router();

const phonebookController = require("../controller/phonebook");

router.get("/", phonebook.read);

router.get((request, response) => {
  conn("phonebook")
    .select()
    .then((phonebook) => {
      response.json(phonebook);
    });
});

router.post("/" , );

router.put("/:id", (request, response) => {
  const nome = request.body.nome;
  const id = Number(request.params.id);

  if (!nome) {
    return response.status(400).json({
      error: "Lista telefônica não disponível",
    });
  }
  conn("phonebook")
    .update({ nome: nome })
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: "Phonebok atualizada com sucesso" });
    })

    .catch((error) => {
      response.status(500).json({
        error: "Erro ao inserir na Lista Telefônica",
      });
    });
});

router.get("/:id", (request, response) => {
  const id = Number(request.params.id); // 1 == 1 | 1 == "1"
  conn("phonebook")
    .select()
    .where({ id: id })
    .then((phonebook) => {
      response.status(200).json(tarefa);
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao buscar a tarefa no banco de dados",
      });
    });
});

router.delete("/:id", (request, response) => {
  const id = Number(request.params.id);
  conn("phonebook")
    .del()
    .where({ id: id })
    .then((_) => {
      response.status(200).json({ msg: "A tarefa foi excluída!" });
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao excluir a tarefa no banco de dados",
      });
    });
});

module.exports = router;
