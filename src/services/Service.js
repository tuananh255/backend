import db from '../models'
export const addService=({title,slug,description,content,imgThumbnail,metaTitle,metaDescription})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.service.create({
            title,slug,description,imgThumbnail,content,metaDescription,metaTitle
        });
        resolve({
            message: 'tạo thành công',
            service: response
        });
    } catch (error) {
        console.log(error)
        reject(error);
    }
})

export const updateService = ({ id, title, slug, description, content, imgThumbnail, metaTitle, metaDescription }) => new Promise(async (resolve, reject) => {
    try {
        const [updated] = await db.service.update(
            { title, slug, description, content, imgThumbnail, metaTitle, metaDescription },
            { where: { id } }
        );

        if (updated) {
            const updatedService = await db.service.findByPk(id);
            resolve({
                message: 'Cập nhật thành công',
                service: updatedService
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
export const getAllServices = () => new Promise(async (resolve, reject) => {
    try {
        const services = await db.service.findAll();
        resolve({
            message: 'Lấy tất cả dịch vụ thành công',
            services
        });
    } catch (error) {
        console.log(error);
        reject(error);
    }
});
// service.js
export const getServiceById = (id) => new Promise(async (resolve, reject) => {
    try {
        const service = await db.service.findByPk(id);
        if (service) {
            resolve({
                message: 'Lấy dịch vụ thành công',
                service
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
// service.js
export const deleteService = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.service.destroy({
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
