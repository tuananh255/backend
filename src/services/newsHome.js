import db from '../models'
export const addNewsHome = ({ title, desription, img1,img2,img3, title1, title2, title3, desription1, desription2, desription3 }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.News.create({
            title,
            desription,
            title1,
            title2,
            title3,
            desription1,
            img1,img2,img3,
            desription2,
            desription3
        });
        resolve({
            message: 'Tạo thành công',
            Noibat: response
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllNews = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.News.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllNewsId = (id) => new Promise(async (resolve, reject) => {
    try {
        const DacDiems = await db.News.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            DacDiem: DacDiems
        });
    } catch (error) {
        reject(error);
    }
});


export const updateNews = ({id, img1,img2,img3, title,desription,title1,title2,title3,desription1,desription2,desription3 }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.News.update(
            {title,desription,title1, img1,img2,img3,title2,title3,desription1,desription2,desription3 },
            { where: { id } }
        );

        if (updated) {
            const updatedDacDiem = await db.FeedBack.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                Noibat: updatedDacDiem
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

export const deleteNews = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.News.destroy({
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