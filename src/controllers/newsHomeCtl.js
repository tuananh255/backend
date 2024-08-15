import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

const addNewsHome = async (req, res) => {
    try {
        const { title, desription,img1,img2,img3, title1, title2, title3, desription1, desription2, desription3 } = req.body;
        const response = await service.addNewsHome({ title,img1,img2,img3, desription, title1, title2, title3, desription1, desription2, desription3 });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllNews =async (req,res)=>{
    try {
        const response = await service.getAllNews()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllNewsId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getAllNewsId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateNews = async (req, res) => {
    const { title,img1,img2,img3,desription,title1,title2,title3,desription1,desription2,desription3 ,id} = req.body;
    try {
        const response = await service.updateNews({id,img1,img2,img3, title,desription,title1,title2,title3,desription1,desription2,desription3 });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteNews = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteNews(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addNewsHome,getAllNews,getAllNewsId,updateNews,deleteNews
}