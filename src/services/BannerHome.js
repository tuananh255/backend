import db from '../models'
export const addBannerHome=({title,description,img})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.BannerHome.create({
            title: title,
            description: description,
            img: img,
        });
        resolve({
            message: 'tạo thành công',
            bannerHome: response
        });
    } catch (error) {
        reject(error);
    }
})

export const getAllBannerHome = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.BannerHome.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            bannerHomes: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllBannerId = (id) => new Promise(async (resolve, reject) => {
    try {
        const banners = await db.BannerHome.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            banner: banners
        });
    } catch (error) {
        reject(error);
    }
});


export const updateBanner = ({id, title, description, img }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.BannerHome.update(
            { title, description, img },
            { where: { id } }
        );

        if (updated) {
            const updatedBanner = await db.BannerHome.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                bannerHome: updatedBanner
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

export const deleteBanner = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.BannerHome.destroy({
            where: { id }
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