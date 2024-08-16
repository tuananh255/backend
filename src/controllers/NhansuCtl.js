import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addNhanvien =async (req,res)=>{
    try {
        const {name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich} = req.body
        if(name==="" || vitri==="" || phone==="" || email==="" ||address==="" || review==="" || kinhnghiem ==="" || hocvan ==="" || thanhtich ===null) return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        
        const response = await service.addNhanvien({name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
const updateNhanvien = async (req, res) => {
    const { id, name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich } = req.body;
    try {
        const response = await service.updateNhanvien({ id, name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich });
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getAllNhanviens = async (req, res) => {
    try {
        const response = await service.getAllNhanviens();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const getNhanvienById = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.getNhanvienById(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteNhanvien = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteNhanvien(id);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};
module.exports={
    addNhanvien, updateNhanvien,
    getAllNhanviens,
    getNhanvienById,
    deleteNhanvien
}