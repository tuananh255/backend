import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addService =async (req,res)=>{
    try {
        const {title,slug,description,content,imgThumbnail,metaTitle,metaDescription} = req.body
        if(title=="" || slug=="" || description=="" || content=="" ||imgThumbnail=="" || metaTitle=="" || metaDescription ==="") return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        
        const response = await service.addService({title,slug,description,content,imgThumbnail,metaTitle,metaDescription})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
const updateService = async (req, res) => {
    const { id, title, slug, description, content, imgThumbnail, metaTitle, metaDescription } = req.body;
    try {
        const response = await service.updateService({ id, title, slug, description, content, imgThumbnail, metaTitle, metaDescription });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getAllServices = async (req, res) => {
    try {
        const response = await service.getAllServices();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getServiceById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.getServiceById(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteService = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteService(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};
module.exports={
    addService, updateService,
    getAllServices,
    getServiceById,
    deleteService
}