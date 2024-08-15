import db from '../models'
export const addFbHome = ({ title, desription, img1,img2,img3, title1, title2, title3, desription1, desription2, desription3 }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.FeedBack.create({
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

export const getAllFb = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.FeedBack.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllFbId = (id) => new Promise(async (resolve, reject) => {
    try {
        const DacDiems = await db.FeedBack.findAll({
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


export const updateFb = ({id, img1,img2,img3, title,desription,title1,title2,title3,desription1,desription2,desription3 }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.FeedBack.update(
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

export const deleteFb = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.FeedBack.destroy({
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