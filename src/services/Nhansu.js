import db from '../models'
export const addNhanvien=({name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Nhansu.create({
            name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich
        });
        console.log(response)
        resolve({
            message: 'tạo thành công',
            Nhanvien: response
        });
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateNhanvien = ({ name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich ,id}) => new Promise(async (resolve, reject) => {
    try {
        const [updated] = await db.Nhansu.update(
            { name,vitri,phone,email,address,review,kinhnghiem,hocvan,thanhtich },
            { where: { id } }
        );

        if (updated) {
            const updatedNhanvien = await db.Nhansu.findByPk(id);
            resolve({
                message: 'Cập nhật thành công',
                nhanvien: updatedNhanvien
            });
        } else {
            resolve({
                message: 'Bản ghi không tìm thấy'
            });
        }
    } catch (error) {
        console.log(error);
        reject(error);
    }
});
export const getAllNhanviens = () => new Promise(async (resolve, reject) => {
    try {
        const Nhanviens = await db.Nhansu.findAll();
        resolve({
            message: 'Lấy tất cả dịch vụ thành công',
            Nhanviens
        });
    } catch (error) {
        console.log(error);
        reject(error);
    }
});
export const getNhanvienById = (id) => new Promise(async (resolve, reject) => {
    try {
        const Nhanvien = await db.Nhansu.findByPk(id);
        if (Nhanvien) {
            resolve({
                message: 'Lấy dịch vụ thành công',
                Nhanvien
            });
        } else {
            resolve({
                message: 'Dịch vụ không tìm thấy'
            });
        }
    } catch (error) {
        console.log(error);
        reject(error);
    }
});
export const deleteNhanvien = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.Nhansu.destroy({
            where: { id }
        });

        if (deleted) {
            resolve({
                message: 'Xóa thành công'
            });
        } else {
            resolve({
                message: 'Dịch vụ không tìm thấy'
            });
        }
    } catch (error) {
        console.log(error);
        reject(error);
    }
});
