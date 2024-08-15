import { interalServerError } from "../middewares/handleError"
import * as service from "../services"
import { email,password } from "../helpers/joiSchema"
import Joi from "joi"

const registerUser =async (req,res)=>{
    try {

        const {email,password,name,phone} = req.body
        if(!email || !password|| !name || !phone) return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        const response = await service.register(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const login =async (req,res)=>{
    try {
        const {email,password} = req.body
        console.log(req.body)
        if(!email || !password) return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        const response = await service.login({email,password})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllUser =async (req,res)=>{
    try {
        const response = await service.getAllUser()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
const getUserId =async (req,res)=>{
    const { id } = req.params;  // Lấy ID từ params
    try {
        const response = await service.getUserId(id); // Gọi dịch vụ tìm kiếm theo ID
        if (response.user) {
            return res.status(200).json(response);
        } else {
            return res.status(404).json({ message: 'Người dùng không tìm thấy' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server nội bộ' });
    }
}

const updateUser =async (req,res)=>{
    const { id } = req.params;
    const userData = req.body;

    try {
        const response = await service.updateUserById(id, userData);
        if (response.user) {
            return res.status(200).json({ message: 'Cập nhật thành công', user: response.user });
        } else {
            return res.status(404).json({ message: 'Người dùng không tìm thấy' });
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server nội bộ' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await service.deleteUserById(id); 
        if (response.message === 'Xóa thành công') {
            return res.status(200).json(response);
        } else {
            return res.status(404).json(response);
        }
    } catch (error) {
        return res.status(500).json({ message: 'Lỗi server nội bộ' });
    }
};


module.exports={
    registerUser,login,getAllUser,getUserId,updateUser,deleteUser
}