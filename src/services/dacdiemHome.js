import db from '../models'
export const addDdHome = ({ title, desription, title1, title2, title3, desription1, desription2, desription3 }) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.Noibat.create({
            title,
            desription,
            title1,
            title2,
            title3,
            desription1,
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

export const getAllNoibat = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.Noibat.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllDacDiemId = (id) => new Promise(async (resolve, reject) => {
    try {
        const DacDiems = await db.Noibat.findAll({
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


export const updateDacDiem = ({id, title,desription,title1,title2,title3,desription1,desription2,desription3 }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.Noibat.update(
            {title,desription,title1,title2,title3,desription1,desription2,desription3 },
            { where: { id } }
        );

        if (updated) {
            const updatedDacDiem = await db.Noibat.findByPk(id); // Tìm bản ghi đã được cập nhật
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

export const deleteDacDiem = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.Noibat.destroy({
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