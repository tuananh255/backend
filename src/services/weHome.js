import db from '../models'
export const addWeHome=({title,desription})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.WeHome.create({
            title: title,
            desription: desription,
        });
        resolve({
            message: 'tạo thành công',
            WeHome: response
        });
    } catch (error) {
        reject(error);
    }
})

export const getAllWeHome = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.WeHome.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            WeHomes: home
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllWeId = (id) => new Promise(async (resolve, reject) => {
    try {
        const Wes = await db.WeHome.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            We: Wes
        });
    } catch (error) {
        reject(error);
    }
});


export const updateWe = ({id, title, desription }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.WeHome.update(
            { title, desription },
            { where: { id } }
        );

        if (updated) {
            const updatedWe = await db.WeHome.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                WeHome: updatedWe
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

export const deleteWe = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.WeHome.destroy({
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