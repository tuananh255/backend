import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

const addFbHome = async (req, res) => {
    try {
        const { title, desription,img1,img2,img3, title1, title2, title3, desription1, desription2, desription3 } = req.body;
        const response = await service.addFbHome({ title,img1,img2,img3, desription, title1, title2, title3, desription1, desription2, desription3 });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllFb =async (req,res)=>{
    try {
        const response = await service.getAllFb()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
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
    const { title,img1,img2,img3,desription,title1,title2,title3,desription1,desription2,desription3 ,id} = req.body;
    try {
        const response = await service.updateFb({id,img1,img2,img3, title,desription,title1,title2,title3,desription1,desription2,desription3 });
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