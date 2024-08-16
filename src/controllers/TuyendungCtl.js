import { interalServerError } from "../middewares/handleError"
import * as service from "../services"

// ứng viên

const addUngvien = async (req, res) => {
    try {
        const { name, email, phone, positionApplied, cvImage, contentMessage } = req.body;

        if (!name || !email || !phone || !positionApplied) {
            return res.status(400).json({ message: 'Tên, email, số điện thoại và vị trí ứng tuyển là bắt buộc.' });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: 'Email không hợp lệ.' });
        }
        const response = await service.addUngvien({ name, email, phone, positionApplied, cvImage, contentMessage });
        return res.status(200).json(response);

    } catch (error) {
        console.error('Lỗi khi thêm ứng viên:', error);
        return interalServerError(res);
    }
};

const getAllUngVien =async (req,res)=>{
    try {
        const response = await service.getAllUngvien()
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const getAllUngvienId =async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getUngvienId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

const updateUngvienStatus = async (req, res) => {
    const { status,id} = req.body;
    try {
        const response = await service.updateUngvienStatus({id, status});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteUngVien = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await service.deleteUngVien({id});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

// bài viết

const addBaiviet = async(req,res)=>{
    try {
        const {title,description,image} = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Tiêu đề và mô tả trống!' });
        }
        const response = await service.addBaiviet({title,description,image});
        return res.status(200).json(response);

    } catch (error) {
        console.error('Lỗi khi thêm bài viết:', error);
        return interalServerError(res);
    }
}
const getAllBaiviet = async(req,res)=>{
    try {

        const response = await service.getAllBaiviet();
        return res.status(200).json(response);

    } catch (error) {
        console.error('Lỗi khi thêm bài viết:', error);
        return interalServerError(res);
    }
}

const getBaivietId = async (req,res)=>{
    const {id} = req.params
    try {
        const response = await service.getBaivietId(id)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
const updateBaiviet = async (req, res) => {
    const { title,description,image,id} = req.body;
    try {
        const response = await service.updateBaiviet({id, title,description,image});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};

const deleteBaiviet = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await service.deleteBaiviet({id});
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
};
module.exports ={
    addUngvien,getAllUngVien,getAllUngvienId,updateUngvienStatus,
    deleteUngVien,addBaiviet,getAllBaiviet,getBaivietId,updateBaiviet,
    deleteBaiviet
}