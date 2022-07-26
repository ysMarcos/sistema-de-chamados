import { Router } from 'express';

import ClienteController from './controllers/ClienteController';
import SuporteController from './controllers/SuporteController';
import ChamadoController from './controllers/ChamadoController';
import MensagemController from './controllers/MensagemController';

const router = Router();

router.post("/cliente", ClienteController.criarCliente);
router.get("/clientes", ClienteController.listarClientes);
router.get("/cliente/:id", ClienteController.listarCliente);
router.put("/cliente/:id", ClienteController.atualizaCliente);
router.delete("/cliente/:id", ClienteController.deletaCliente);

router.post("/suporte", SuporteController.criarSuporte);
router.get("/suporte", SuporteController.listarSuportes);
router.get("/suporte/:id", SuporteController.listarSuporte);
router.put("/suporte/:id", SuporteController.atualizaSuporte);
router.delete("/suporte/:id", SuporteController.deletaSuporte);

router.post("/chamado", ChamadoController.criarChamado);
router.get("/chamados", ChamadoController.listarChamadosAbertos);
router.get("/chamados/todos", ChamadoController.listarChamados);
router.get("/chamado/:id", ChamadoController.listarChamado);
router.put("/chamado/:id", ChamadoController.atualizarChamado);
router.put("/chamado/fechar/:id", ChamadoController.fecharChamado);
router.delete("/chamado/:id", ChamadoController.deletarChamado);

router.post("/mensagem", MensagemController.criarMensagem);
router.get("/mensagem/:chamado_id", MensagemController.listarMensagensChamado);
router.put("/mensagem/:mensagem_id", MensagemController.editarMensagem);
router.delete("/mensagem/:mensagem_id", MensagemController.deletarMensagem);
export { router }