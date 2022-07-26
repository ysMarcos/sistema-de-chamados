import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default {

    async criarSuporte(req: Request, res: Response){
        try{
            const { nome, email, senha } = req.body;
            const novoSuporte = await prisma.suporte.create({
                data: {
                    nome: nome,
                    email: email,
                    senha: senha,
                }
            });
            return res.status(200).json(novoSuporte)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },

    async listarSuportes(req: Request, res: Response){
        try{
            const suportes = await prisma.suporte.findMany();
            return res.status(200).json(suportes);
        } catch (erro){
            return res.status(500).json({ erro })
        }
    },

    async listarSuporte(req: Request, res: Response){
        try{
            const id = req.params.id;
            const suporte = await prisma.suporte.findUnique({
                where: {
                    id: Number(id)
                },
            });
            return res.status(200).json(suporte);
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },
 
    async atualizaSuporte(req: Request, res: Response){
        try{
            const id = req.params.id;
            const {nome, email, senha} = req.body;
            const suporteAtualizado = await prisma.suporte.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nome: nome,
                    email: email,
                    senha: senha
                }
            });
            return res.status(200).json(suporteAtualizado)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },

    async deletaSuporte(req: Request, res: Response){
        try{
            const id = req.params.id
            const suporteDeletado = await prisma.suporte.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(suporteDeletado)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },
}