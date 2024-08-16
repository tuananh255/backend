import db from '../models'
export const addCtaHome=({title,desription})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.Cta.create({
            title: title,
            desription: desription,
        });
        resolve({
            message: 'tạo thành công',
            Cta: response
        });
    } catch (error) {
        reject(error);
    }
})

export const getAllCtaHome = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.Cta.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            home: home
        });
    } catch (error) {
        console.error("Lỗi khi lấy dữ liệu từ Cta:", error);
        reject(error);
    }
});


export const getAllCtaId = (id) => new Promise(async (resolve, reject) => {
    try {
        const Ctas = await db.Cta.findAll({
            where: { id: id } 
        });

        resolve({
            message: 'Lấy theo id thành công',
            Cta: Ctas
        });
    } catch (error) {
        reject(error);
    }
});


export const updateCta = ({id, title, desription }) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.Cta.update(
            { title, desription },
            { where: { id } }
        );

        if (updated) {
            const updatedCta = await db.Cta.findByPk(id); // Tìm bản ghi đã được cập nhật
            resolve({
                message: 'Cập nhật thành công',
                Cta: updatedCta
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

export const deleteCta = (id) => new Promise(async (resolve, reject) => {
    try {
        const deleted = await db.Cta.destroy({
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