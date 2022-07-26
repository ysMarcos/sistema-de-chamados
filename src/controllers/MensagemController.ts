import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {

    async criarMensagem(req: Request, res: Response){
        try{
            const { chamado_id, cliente_id, suporte_id, mensagem } = req.body;
            const chamadoExistente = await prisma.chamado.findUnique({
                where: {
                    id: chamado_id
                }
            })
            if(chamadoExistente){
                const novaMensagem = await prisma.mensagem.create({
                    data: {
                        chamado_id: chamado_id,
                        cliente_id: cliente_id,
                        suporte_id: suporte_id,
                        mensagem: mensagem,
                    }
                });
                return res.status(200).json(novaMensagem);
            } else{
                console.log("Chamado não existe");
                return null;
            }
        } catch (erro){
            return res.status(500).json({ erro });
        }
    },

    async listarMensagensChamado(req: Request, res: Response){
        try{
            const { chamado_id } = req.params;
            const mensagens = await prisma.mensagem.findMany({
                where: {
                    chamado_id: Number(chamado_id)
                }
            });
            return res.status(200).json(mensagens);
        } catch (erro){
            return res.status(500).json({ erro })
        }
    },
 
    async editarMensagem(req: Request, res: Response){
        try{
            const { mensagem_id } = req.params;
            const { cliente_id, suporte_id, mensagem } = req.body;

            const mensagemAtualizada = await prisma.mensagem.update({
                where:{
                    id: Number(mensagem_id)
                },
                data: {
                    cliente_id: cliente_id,
                    suporte_id: suporte_id,
                    mensagem: mensagem,
                }
            });
            return res.status(200).json(mensagemAtualizada);
        } catch (erro){
            return res.status(500).json({ erro });
        }
    },

    async deletarMensagem(req: Request, res: Response){
        try{
            const mensagem_id = req.params
            const mensagemDeletada = await prisma.mensagem.delete({
                where: {
                    id: Number(mensagem_id)
                }
            });
            return res.status(200).json(mensagemDeletada)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },
  
}

