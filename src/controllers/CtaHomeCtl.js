import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addCtaHome =async (req,res)=>{
    try {
        const {title,desription} = req.body
        const response = await service.addCtaHome({title,desription})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllCtaHome =async (req,res)=>{
    try {
        const response = await service.getAllCtaHome()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllCtaId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllCtaId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateCta = async (req, res) => {
    const { title, desription ,id} = req.body;
    try {
        const response = await service.updateCta({id, title, desription });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteCta = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteCta(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addCtaHome,getAllCtaHome,getAllCtaId,updateCta,deleteCta
}