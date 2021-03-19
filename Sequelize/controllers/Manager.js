const db = require('../models/index')
const { Op } = require("sequelize");

const getAllManagers = async (req, res) => {
    const allManagers = await db.Manager.findAll();
    res.status(200).send(allManagers);
}
const getManagerById = async (req, res) => {
    const targetId = req.params.id;
    const targetManager = await db.Manager.findOne({ where: { id: targetId } });
    res.status(200).send(targetManager)
}
const createManager = async (req,res)=>{
    const{name,experience} = req.body
    const newManager = await db.Manager.create({
        name:name,
        experience:experience
    })
    res.status(201).send(newManager)
}
const upDateManager =async (req,res)=>{
    const{name,experience} = req.body
    const targetId=req.params.id;
    await db.Manager.update({
        name:name,
        experience:experience
    },{
        where:{id:targetId}
    })
    res.status(200).send('update sucess')
}

const deleteManager = async(req,res)=>{
    const targetId= req.params.id
    await db.Manager.destroy({
        where:{id:targetId}
    })
    res.status(204).send();
}
module.exports = {
    getAllManagers,
    getManagerById,
    createManager,
    upDateManager,
    deleteManager
}