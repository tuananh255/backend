import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addBannerHome =async (req,res)=>{
    try {
        const {title,description,img} = req.body
        const response = await service.addBannerHome({title,description,img})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllBannerHome =async (req,res)=>{
    try {
        const response = await service.getAllBannerHome()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllBannerId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllBannerId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateBanner = async (req, res) => {
    const { title, description, img ,id} = req.body;
    try {
        const response = await service.updateBanner({id, title, description, img });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteBanner = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteBanner(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addBannerHome,getAllBannerHome,getAllBannerId,updateBanner,deleteBanner
}