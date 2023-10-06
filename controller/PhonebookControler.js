const conn = require("../db/conn");

const read = (request, response) => {
  conn("tab_phonebook")
    .select()
    .then((phonebook) => {
      response.json(phonebook);
    });
};

const create = (request, response) => {
    console.log(request.body)
  const { nome, number } = request.body;
  if (!nome) {
    return response.status(400).json({
      error: "Nome do cliente não informado",
    });
  }
  if (!number) {
    return response.status(400).json({
      error: "Numero do cliente não informado",
    });
  }
  conn("tab_phonebook")
    .insert({ nome, number })
    .then((_) => {
      response.json({ msg: "Cliente cadastrado com sucesso" });
    })
    .catch((error) => {
      response.status(500).json({
        error: "Erro ao cadastrar cliente",
      });
    });
};

const del = (request, response) => {
  const id = Number(request.params.id);
  conn("tab_phonebook")
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
};

const readbyId = (request, response) => {
  const id = Number(request.params.id); // 1 == 1 | 1 == "1"
  conn("tab_phonebook")
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
};
const update = (request, response) => {
  const nome = request.body.nome;
  const id = Number(request.params.id);

  if (!nome) {
    return response.status(400).json({
      error: "Lista telefônica não disponível",
    });
  }
  conn("tab_phonebook")
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
};
module.exports = { read, create, del, readbyId, update };
