import db from '../models'

//  ứng viên
export const addUngvien = ({ name, email, phone, positionApplied, cvImage, contentMessage }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Ungvien.create({
            name,
            email,
            phone,
            positionApplied,
            cvImage,
            contentMessage
        });
        resolve({
            message: 'Tạo thành công',
            ungvien: response
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllUngvien = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.Ungvien.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            allUngvien: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getUngvienId = (id) => new Promise(async (resolve, reject) => {
    try {
        const Wes = await db.Ungvien.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            idUngvien: Wes
        });
    } catch (error) {
        reject(error);
    }
});


export const updateUngvienStatus = ({id, status }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.Ungvien.update(
            { status },
            { where: { id } }
        );

        if (updated) {
            const updatedWe = await db.Ungvien.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                updateStatus: updatedWe
            });
        } else {
            resolve({
                message: 'Bản ghi không tìm thấy'
            });
        }
    } catch (error) {
        reject(error);
    }
});

export const deleteUngVien = ({id}) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.Ungvien.destroy({
            where: { id:id }
        });

        if (deleted) {
            resolve({
                message: 'Xoá thành công'
            });
        } else {
            resolve({
                message: 'Bản ghi không tìm thấy'
            });
        }
    } catch (error) {
        reject(error);
    }
});


// bài viết
export const addBaiviet = ({title,description,image}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.postTuyenDung.create({
            title,description,image
        });
        resolve({
            message: 'Tạo thành công',
            baiviet: response
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllBaiviet = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.postTuyenDung.findAll(); 
        resolve({
            message: 'Lấy tất cả thành công',
            allBaiviet: home
        });
    } catch (error) {
        reject(error);
    }
});
export const getBaivietId = (id) => new Promise(async (resolve, reject) => {
    try {
        const Wes = await db.postTuyenDung.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            idUngvien: Wes
        });
    } catch (error) {
        reject(error);
    }
});
export const updateBaiviet = ({id, title,description,image }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.postTuyenDung.update(
            { title,description,image },
            { where: { id } }
        );

        if (updated) {
            const updatedWe = await db.postTuyenDung.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                update: updatedWe
            });
        } else {
            resolve({
                message: 'Bản ghi không tìm thấy'
            });
        }
    } catch (error) {
        reject(error);
    }
});

export const deleteBaiviet = ({id}) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.postTuyenDung.destroy({
            where: { id:id }
        });

        if (deleted) {
            resolve({
                message: 'Xoá thành công'
            });
        } else {
            resolve({
                message: 'Bản ghi không tìm thấy'
            });
        }
    } catch (error) {
        reject(error);
    }
});