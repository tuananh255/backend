import db from '../models'
export const addBaivietContent=({title,slug,linhvuc,description,content,imgThumbnail,metaTitle,metaDescription})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Baiviet.create({
            title,slug,description,imgThumbnail,linhvuc,content,metaDescription,metaTitle
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

export const updateBaivietContent = ({ id, title,linhvuc, slug, description, content, imgThumbnail, metaTitle, metaDescription }) => new Promise(async (resolve, reject) => {
    try {
        const [updated] = await db.Baiviet.update(
            { title, slug, description, content,linhvuc, imgThumbnail, metaTitle, metaDescription },
            { where: { id } }
        );

        if (updated) {
            const updatedService = await db.service.findByPk(id);
            resolve({
                message: 'Cập nhật thành công',
                // service: updatedService
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
export const getAllBaivietContent = () => new Promise(async (resolve, reject) => {
    try {
        const services = await db.Baiviet.findAll();
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
export const getBaivietContentById = (id) => new Promise(async (resolve, reject) => {
    try {
        const service = await db.Baiviet.findByPk(id);
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
export const deleteBaivietContent = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.Baiviet.destroy({
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

export const incrementViewCountBaiviet = (id) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi Home theo id
        const home = await db.Baiviet.findOne({ where: { id: id } }); 

        if (!home) {
            return reject(new Error('Home not found'));
        }

        // Tăng viewCount
        const updatedHome = await db.Home.update(
            { viewCount: home.viewCount + 1 },
            { where: { id: id }, returning: true }
        );

        resolve({
            message: 'View count updated successfully',
            home: updatedHome[1][0]
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllViewCountBaiviet = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.Baiviet.findAll(); 
        resolve({
            message: 'Lấy tất cả lượng truy cập trang home thành công',
            home: home
        });
    } catch (error) {
        reject(error);
    }
});