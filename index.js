//Api

const express = require("express");
const AdminEspecie = require("./Adminespecie");
const req = require("express/lib/request");
const res = require("express/lib/response");



class EspecieApi{
    constructor (){
        this.port = 3001
        this.app = express();
        this.adminespecie = new AdminEspecie();
        this.app.use(this.configurarCORS);
        this.app.use(express.json());

        this.app.post(
            "/crear_especie",
            (req,res)=>{
                this.adminespecie.crearEspecie(req,res);
            }
        )

        this.app.get(
            "/listar_especie",
            (req,res)=>{
                this.adminespecie.listarEspecie(req,res);
            }
        )
    }

    configurarCORS(req , res, next){

        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST");
        res.header("Access-Control-Allow-Headers", "Content-type");
        next();

    }

    IniciarServidor(){
        this.app.listen(
            this.port,
            ()=>{console.log(`Server Started in port ${this.port}`)}
        )
    }

}

const Especieapi = new EspecieApi();
Especieapi.IniciarServidor();
