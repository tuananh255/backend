import db from '../models'
export const incrementViewCount = (homeId) => new Promise(async (resolve, reject) => {
    try {
        // Tìm bản ghi Home theo homeId
        const home = await db.Home.findOne({ where: { id: homeId } }); 

        if (!home) {
            return reject(new Error('Home not found'));
        }

        // Tăng viewCount
        const updatedHome = await db.Home.update(
            { viewCount: home.viewCount + 1 },
            { where: { id: homeId }, returning: true }
        );

        resolve({
            message: 'View count updated successfully',
            home: updatedHome[1][0]
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllViewCount = () => new Promise(async (resolve, reject) => {
    try {
        const home = await db.Home.findAll(); 
        console.log(home)
        resolve({
            message: 'Lấy tất cả lượng truy cập trang home thành công',
            home: home
        });
    } catch (error) {
        reject(error);
    }
});