import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default {

    async criarCliente(req: Request, res: Response){
        try{
            const {nome, email, senha} = req.body;
            const novoCliente = await prisma.cliente.create({
                data: {
                    nome: nome,
                    email: email,
                    senha: senha
                }
            });
            return res.status(200).json(novoCliente);
        } catch (erro){
            return res.status(500).json({ erro })
        }
    },

    async listarClientes(req: Request, res: Response){
        try{
            const clientes = await prisma.cliente.findMany();
            return res.status(200).json(clientes);
        } catch (erro){
            return res.status(500).json({ erro })
        }
    },

    async listarCliente(req: Request, res: Response){
        try{
            const id = req.params.id;
            const cliente = await prisma.cliente.findUnique({
                where: {
                    id: Number(id)
                },
            });
            return res.status(200).json(cliente);
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },
 
    async atualizaCliente(req: Request, res: Response){
        try{
            const id = req.params.id;
            const {nome, email, senha} = req.body;
            const clienteAtualizado = await prisma.cliente.update({
                where: {
                    id: Number(id)
                },
                data: {
                    nome: nome,
                    email: email,
                    senha: senha
                }
            });
            return res.status(200).json(clienteAtualizado)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },

    async deletaCliente(req: Request, res: Response){
        try{
            const id = req.params.id
            const clienteDeletado = await prisma.cliente.delete({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(clienteDeletado)
        } catch(erro){
            return res.status(500).json({ erro })
        }
    },
  
}

