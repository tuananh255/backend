import db from '../models'
export const addInfo = ({ title, companyName, trusochinh,cn1,cn2, email, tax}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.InfoWebsite.create({
            title,companyName,trusochinh,cn1,cn2,email,tax
        });
        resolve({
            message: 'Tạo thành công',
            Noibat: response
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllInfo = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.InfoWebsite.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: home
        });
    } catch (error) {
        reject(error);
    }
});


export const updateInfo = ({ title,companyName,trusochinh,cn1,cn2,email,tax ,id}) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.InfoWebsite.update(
            { title,companyName,trusochinh,cn1,cn2,email,tax },
            { where: { id } }
        );

        if (updated) {
            const updatedDacDiem = await db.InfoWebsite.findByPk(id); // Tìm bản ghi đã được cập nhật
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


export const addSetting = ({ title, logo, favicon,ngonngu}) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.settingWebsite.create({
            title,logo,favicon,ngonngu
        });
        resolve({
            message: 'Tạo thành công',
            Noibat: response
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllSetting = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.settingWebsite.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: home
        });
    } catch (error) {
        reject(error);
    }
});


export const updateSetting = ({title, logo, favicon,ngonngu ,id}) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi theo id và cập nhật
        const [updated] = await db.settingWebsite.update(
            { title, logo, favicon,ngonngu},
            { where: { id } }
        );

        if (updated) {
            const updatedDacDiem = await db.settingWebsite.findByPk(id); // Tìm bản ghi đã được cập nhật
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
