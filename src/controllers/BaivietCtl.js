import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addBaivietContent =async (req,res)=>{
    try {
        const {title,linhvuc,slug,description,content,imgThumbnail,metaTitle,metaDescription} = req.body
        if(title===""|| linhvuc==="" || slug==="" || description==="" || content==="" ||imgThumbnail==="" || metaTitle==="" 
            || metaDescription ==="") return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        
        const response = await service.addBaivietContent({title,linhvuc,slug,description,content,imgThumbnail,metaTitle,metaDescription})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
const updateBaivietContent = async (req, res) => {
    const { id, title, slug, description,linhvuc, content, imgThumbnail, metaTitle, metaDescription } = req.body;
    try {
        const response = await service.updateBaivietContent({ id, title,linhvuc, slug, description, content, imgThumbnail, metaTitle, metaDescription });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getAllBaivietContent = async (req, res) => {
    try {
        const response = await service.getAllBaivietContent();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getBaivietContentById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.getBaivietContentById(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteBaivietContent = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteBaivietContent(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const incrementViewCountBaiviet  =async (req,res)=>{
    try {
        const { id } = req.body;
        if (!id) {
            return res.status(400).json({
                message: 'Missing id'
            });
        }
        const response = await service.incrementViewCountBaiviet(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllViewCountBaiviet  =async (req,res)=>{
    try {
        const response = await service.getAllViewCountBaiviet();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

module.exports={
    addBaivietContent, updateBaivietContent,
    getAllBaivietContent,
    getBaivietContentById,incrementViewCountBaiviet,
    deleteBaivietContent,getAllViewCountBaiviet
}