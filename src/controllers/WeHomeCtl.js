import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addWeHome =async (req,res)=>{
    try {
        const {title,desription} = req.body
        const response = await service.addWeHome({title,desription})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllWeHome =async (req,res)=>{
    try {
        const response = await service.getAllWeHome()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllWeId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllWeId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateWe = async (req, res) => {
    const { title, description ,id} = req.body;
    try {
        const response = await service.updateWe({id, title, description });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteWe = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteWe(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addWeHome,getAllWeHome,getAllWeId,updateWe,deleteWe
}