import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

const addDdHome = async (req, res) => {
    try {
        const { title, desription, title1, title2, title3, desription1, desription2, desription3 } = req.body;
        const response = await service.addDdHome({ title, desription, title1, title2, title3, desription1, desription2, desription3 });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllNoibat =async (req,res)=>{
    try {
        const response = await service.getAllNoibat()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllDacDiemId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllDacDiemId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateDacDiem = async (req, res) => {
    const { title,desription,title1,title2,title3,desription1,desription2,desription3 ,id} = req.body;
    try {
        const response = await service.updateDacDiem({id, title,desription,title1,title2,title3,desription1,desription2,desription3 });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteNoibat = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteDacDiem(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addDdHome,getAllNoibat,getAllDacDiemId,updateDacDiem,deleteNoibat
}