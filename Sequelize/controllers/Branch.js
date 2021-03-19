const db = require('../models/index')

const getAllBranches = async (req, res) => {
    //{include:[db.Manager]} get object manager replace manager_id
    const allBranches = await db.Branch.findAll({include:[db.Manager]})
    res.status(200).send(allBranches)
}
const createNewBranches = async (req, res) => {
    const { managerName, managerExperience } = req.body
    const { branchName, branchSize } = req.body
    try {

        const crenewManager = await db.Manager.create({
            name: managerName,
            experience: managerExperience
        });
        console.log(crenewManager);
        const newBranches = await db.Branch.create({
            name: branchName,
            size: branchSize,
            manager_id: crenewManager.id
        });
        res.status(201).send(newBranches)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllBranches,
    createNewBranches
}