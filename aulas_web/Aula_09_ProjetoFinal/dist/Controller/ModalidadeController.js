"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletarModalidade = exports.alterarModalidade = exports.listaModalidade = exports.pesquisarModalidade = exports.CadastrarModalidade = void 0;
const ModalidadeService_1 = require("../Service/ModalidadeService");
const modalidadeService = new ModalidadeService_1.ModalidadeService();
//Modalidade
function CadastrarModalidade(req, res) {
    try {
        const novaModalidade = modalidadeService.cadastrarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade adicionada com sucesso!",
            produto: novaModalidade
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.CadastrarModalidade = CadastrarModalidade;
function pesquisarModalidade(req, res) {
    try {
        const id = modalidadeService.consultarModalidade(req.query.id);
        if (id) {
            res.status(200).json({
                mensagem: "Modalidade encontrada com sucesso!",
                modalidade: id,
            });
        }
        else {
            res.status(404).json({ mensagem: "Modalidade não encontrado." });
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.pesquisarModalidade = pesquisarModalidade;
;
function listaModalidade(req, res) {
    try {
        res.status(200).json(modalidadeService.getModalidades());
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}
exports.listaModalidade = listaModalidade;
;
function alterarModalidade(req, res) {
    try {
        const modalidadeAtlz = modalidadeService.alterarModalidade(req.body);
        res.status(201).json({
            mensagem: "Modalidade alterada com sucesso!",
            modalidade: modalidadeAtlz,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.alterarModalidade = alterarModalidade;
function deletarModalidade(req, res) {
    try {
        modalidadeService.excluirModalidade(req.query.id);
        res.status(202).json({
            mensagem: "Modalidade deletada com sucesso!",
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}
exports.deletarModalidade = deletarModalidade;
// Modalidade fim
