import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

const addInfo = async (req, res) => {
    try {
        const { title, companyName, trusochinh,cn1,cn2, email, tax } = req.body;
        const response = await service.addInfo({ title, companyName, trusochinh,cn1,cn2, email, tax });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllInfo =async (req,res)=>{
    try {
        const response = await service.getAllInfo()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}


const updateInfo = async (req, res) => {
    const { title, companyName, trusochinh,cn1,cn2, email, tax ,id} = req.body;
    console.log(req.body)
    try {
        const response = await service.updateInfo({id,title, companyName, trusochinh,cn1,cn2, email, tax });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const addSetting = async (req, res) => {
    try {
        const { title, logo, favicon,ngonngu } = req.body;
        const response = await service.addSetting({ title, logo, favicon,ngonngu });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getAllSetting =async (req,res)=>{
    try {
        const response = await service.getAllSetting()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}


const updateSetting = async (req, res) => {
    const { title, logo, favicon,ngonngu ,id} = req.body;
    console.log(req.body)
    try {
        const response = await service.updateSetting({id,title, logo, favicon,ngonngu});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

module.exports ={
    addInfo,getAllInfo,updateInfo,updateSetting,addSetting,getAllSetting
}