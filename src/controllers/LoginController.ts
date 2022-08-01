import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default{
    async logar(req: Request, res: Response){
        const email = req.body.email;
        const senha = req.body.senha;

        //Verifica dados
        if(!email || !senha) {
            return { erro: 'Dados Insuficientes.'};
        }
        
        try{
            const cliente = await prisma.cliente.findUnique({
                where: {
                    email: email
                }
            })
        } catch(erro){
            return res.status(500).json({erro})
        }
    }
}