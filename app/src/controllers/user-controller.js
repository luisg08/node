const Usuario = require('../app/models/usuario');

//Post
exports.post = function (req, res) {
    var usuario = new Usuario();
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;

    usuario.save(function (error) {
        if (error)
            res.send("Erro ao tentar salvar um usuario." + error);

        res.status(201).json({ message: 'Usuario inserido com sucesso.' });
    });
}

//Get All
exports.get = function (req, res) {
    Usuario.find(function (err, prods) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: 'Usuarios retornados.',
            usuario: prods
        });
    });
}

//FindById
exports.getById = function (req, res) {
    const id = req.params.usuarioId;

    Usuario.findById(id, function (err, usuario) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar usuario, ID mal formado."
            });
        }

        else if (usuario == null) {
            res.status(400).json({
                message: "Usuario não encontrado."
            });
        }
        else {
            res.status(200).json({
                message: "Usuario encontrado.",
                usuario: usuario
            });
        }
    });
}


//Put
exports.put = function (req, res) {
    const id = req.params.usuarioId;

    Usuario.findById(id, function (err, usuario) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar usuario, ID mal formado."
            });
        }

        else if (usuario == null) {
            res.status(400).json({
                message: "Usuario não encontrado."
            });
        }
        else {
            usuario.nome = req.body.nome;
            usuario.email = req.body.email;
            usuario.senha = req.body.senha;

            usuario.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar usuario" + error);

                res.status(200).json({
                    message:"Usuario atualizado com sucesso."
                });
            });
        }
    });
}

//Delete
exports.delete = function(req, res){
    Usuario.findByIdAndRemove(req.params.usuarioId, (err, usuario) =>{
        if(err)
            return res.status(500).send(err);

        const response = {
            message:"Usuario removido com sucesso.",
            id: usuario.id
        };
        return res.status(200).send(response);
    });
}