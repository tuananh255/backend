import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

const addFbHome = async (req, res) => {
    try {
        const { title, desription, details } = req.body;
        // `details` là một mảng các đối tượng feedback details
        const response = await service.addFbHome({ title, desription,details });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllFb =async (req,res)=>{
    try {
        const response = await service.getAllFb();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllFbId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllFbId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateFb = async (req, res) => {
    const { id,title,desription,details} = req.body;
    try {
        const response = await service.updateFb({id,title,desription,details});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteFb = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteFb(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addFbHome,getAllFb,getAllFbId,updateFb,deleteFb
}