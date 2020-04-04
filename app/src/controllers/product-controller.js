const Produto = require('./src/app/models/product.js');

//Post
exports.post = function (req, res) {
    var produtos = new Produto();
    produtos.nome = req.body.nome;
    produtos.preco = req.body.preco;
    produtos.descricao = req.body.descricao;

    produtos.save(function (error) {
        if (error)
            res.send("Erro ao tentar salvar um produto." + error);

        res.status(201).json({ message: 'Produto inserido com sucesso.' });

    });
}

//Get All
exports.get = function (req, res) {
    Produto.find(function (err, prods) {
        if (err)
            res.send(err);

        res.status(200).json({
            message: 'Produtos retornados.',
            produtos: prods
        });
    });
}

//FindById
exports.getById = function (req, res) {
    const id = req.params.produtoId;

    Produto.findById(id, function (err, produto) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar produto, ID mal formado."
            });
        }

        else if (produto == null) {
            res.status(400).json({
                message: "Produto não encontrado."
            });
        }
        else {
            res.status(200).json({
                message: "Produto encontrado.",
                produto: produto
            });
        }
    });
}


//Put
exports.put = function (req, res) {
    const id = req.params.produtoId;

    Produto.findById(id, function (err, produto) {
        if (err) {
            res.status(500).json({
                message: "Erro ao tentar encontrar produto, ID mal formado."
            });
        }

        else if (produto == null) {
            res.status(400).json({
                message: "Produto não encontrado."
            });
        }
        else {
            produto.nome = req.body.nome;
            produto.preco = req.body.preco;
            produto.descricao = req.body.descricao;

            produto.save(function(error){
                if(error)
                    res.send("Erro ao tentar atualizar produto" + error);

                res.status(200).json({
                    message:"Produto atualizado com sucesso."
                });
            });
        }
    });
}

//Delete
exports.delete = function(req, res){
    Produto.findByIdAndRemove(req.params.produtoId, (err, produto) =>{
        if(err)
            return res.status(500).send(err);

        const response = {
            message:"Produto removido com sucesso.",
            id: produto.id
        };
        return res.status(200).send(response);
    });
}