const { AutoRenta } = require("../models");

const addAutoRenta = async(req, res) =>{
    try {
        const {usuario_id, auto_id, dias_rentados, tarifa_diaria} = req.body;
        const rentaTotal = dias_rentados * tarifa_diaria;
        const autoRenta = await AutoRenta.create({usuario_id, auto_id, dias_rentados, tarifa_diaria, renta_Total: rentaTotal});
        res.status(201).json(autoRenta);
    } catch (error) {
        res.status(500).json({error: error});
    }
}

const getAutoRentas = async(req,res) =>{
    try {
        const rentas = await AutoRenta.findAll();
        res.status(200).json(rentas);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const getRentaById = async(req,res) =>{
    try {
        const {id} = req.params;
        const foundRenta = await AutoRenta.findByPk(id);
        if(!foundRenta){
            res.status(404).json({message: "Renta no encontrada"});
        }
        res.status(200).json(foundRenta);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const updatedAutoRenta = async(req,res) =>{
    try {
        const{id} = req.params;
        const {usuario_id, auto_id, dias_rentados, tarifa_diaria} = req.body;
        const foundRenta = AutoRenta.findByPk(id);
        if(!foundRenta){
            res.status(404).json({message: "Renta no encontrada"});
        }

        if(usuario_id) foundRenta.usuario_id = usuario_id;
        if(auto_id) foundRenta.auto_id = auto_id;
        if(dias_rentados) foundRenta.dias_rentados = dias_rentados;
        if(tarifa_diaria) foundRenta.tarifa_diaria = tarifa_diaria;
        if(dias_rentados || tarifa_diaria){
            foundRenta.rentaTotal = dias_rentados*tarifa_diaria;
        }

        await AutoRenta.save();
        return res.status(200).json({message: "renta modificada"}, foundRenta);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

const changeEstadoRenta = async(req,res)=>{
    try {
        const {id} = req.params;
        const {estado} = req.body;

        if(!["pagado","NoPagado"].includes(estado)){
            res.status(400).json({message: "Estado invalido. Es 'pagado' o 'NoPagado'"})
        }

        const renta = AutoRenta.findByPk(id);
        if(!renta){
            res.status(404).json({message: "renta no encontrada"});
        }

        renta.estado = estado;
        await AutoRenta.save();

        res.status(200).json({message:"estado modificado"},renta);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    addAutoRenta,
    getAutoRentas,
    getRentaById,
    updatedAutoRenta,
    changeEstadoRenta,
}