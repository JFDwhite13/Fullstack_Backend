const { PrismaClient } = require('@prisma/client');

class AdminEspecie{
    constructor(){
        this.prisma = new PrismaClient();
    }

    async crearEspecie(req,res){
        
        const datos = req.body;
        console.log(datos)
        try{
            const especie = await this.prisma.especie.create(
                {data:datos}
            )
            res.json("Especie creada correctamente")
        }catch(e){
            console.log(e)
            res.json("Especie  no pudo ser creada")
        }
    }

    async listarEspecie(req,res){
        try{
        const especies =await this.prisma.especie.findMany();
        console.log("salieron datos")
        console.log(especies)
        res.json(especies)
        }catch(e){
            console.log(e)
        }
    }
}



module.exports=AdminEspecie;