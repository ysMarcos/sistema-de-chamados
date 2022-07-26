import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {
    async criarChamado(req: Request, res: Response){
        try{
            const { titulo, descricao, cliente_id, suporte_id } = req.body;
            const novoChamado = await prisma.chamado.create({
                data: {
                    titulo: titulo,
                    descricao: descricao,
                    cliente_id: cliente_id,
                    suporte_id: suporte_id
                }
            });
            return res.status(200).json(novoChamado);
        } catch(erro) {
            return res.status(500).json({ erro });
        }
    },

    async listarChamadosAbertos(req: Request, res: Response){
        try{
            const chamadosAbertos = await prisma.chamado.findMany({
                where: {
                    isFechado: false
                }
            });
            return res.status(200).json(chamadosAbertos);
        } catch(erro){
            return res.status(500).json(erro);
        }
    },

    async listarChamados(req: Request, res: Response){
        try{
            const chamados = await prisma.chamado.findMany();
            return res.status(200).json(chamados);
        } catch(erro){
            return res.status(500).json(erro);
        }
    },

    async listarChamado(req: Request, res: Response){
        try{
            const id = req.params.id;
            const chamado = await prisma.chamado.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(chamado);
        } catch(erro){
            return res.status(500).json(erro);
        }
    },

    async atualizarChamado(req: Request, res: Response){
        try{
            const id = req.params.id;
            const { titulo, descricao, cliente_id, suporte_id } = req.body;
            const chamadoAtualizado = await prisma.chamado.update({
                where: {
                    id: Number(id)
                },
                data: {
                    titulo: titulo,
                    descricao: descricao,
                    cliente_id: cliente_id,
                    suporte_id: suporte_id
                }
            });
            return res.status(200).json(chamadoAtualizado);
        } catch(erro){
            return res.status(500).json({ erro });
        }
    },

    async deletarChamado(req: Request, res: Response){
        try{
            const id = req.params.id;
            const chamadoDeletado = await prisma.chamado.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(chamadoDeletado);
        } catch(erro){
            return res.status(500).json({ erro });
        }
    },

    async fecharChamado(req: Request, res: Response){
        try{
            const id = req.params.id;
            const chamadoVerificado = await prisma.chamado.findUnique({
                where: {
                    id: Number(id)
                }
            })
            if(chamadoVerificado?.isFechado == false){
                const { data_fechamento } = req.body;
                const chamadoFechado = await prisma.chamado.update({
                    where: {
                        id: Number(id)
                    },
                    data: {
                        isFechado: true,
                        data_fechamento: data_fechamento
                    }
                });

                return res.status(200).json({ chamadoFechado });
            } else{
                return console.log("chamado ja está fechado")
            }
        } catch(erro){
            return res.status(500).json({ erro });
        }
    }
}