import db from '../models'
export const addFbHome = ({ title, desription,details  }) => new Promise(async (resolve, reject) => {
    try {
        const feedback = await db.FeedBack.create({
            title,
            desription,
        });
        if (details && details.length > 0) {
            const feedbackDetails = details.map(detail => ({
                feedBackId: feedback.id,
                title: detail.title,
                desription: detail.desription,
                img: detail.img
            }));
            await db.feedbackDetails.bulkCreate(feedbackDetails);
        }
        resolve({
            message: 'Tạo thành công',
            Noibat: feedback
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllFb = () => new Promise(async (resolve, reject) => {
    try {
        const feedbacks = await db.FeedBack.findAll({
            include: [
                {
                    model: db.feedbackDetails,
                    as: 'details',
                    attributes: ['id', 'title', 'desription', 'img'] // Chọn các thuộc tính cần thiết
                }
            ],
            attributes: ['id', 'title', 'desription', 'feedBackHomeId'] // Chọn các thuộc tính của FeedBack
        });

        resolve({
            message: 'Lấy tất cả thành công',
            Noibats: feedbacks
        });
    } catch (error) {
        reject(error);
    }
});

export const getAllFbId = (id) => new Promise(async (resolve, reject) => {
    try {
        const feedback = await db.FeedBack.findOne({
            where: { id: id },
            include: [
                {
                    model: db.feedbackDetails,
                    as: 'details', 
                    attributes: ['id', 'title', 'desription', 'img'] 
                }
            ],
            attributes: ['id', 'title', 'desription', 'feedBackHomeId'] 
        });

        if (feedback) {
            resolve({
                message: 'Lấy theo id thành công',
                DacDiem: feedback
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

export const updateFb = async ({ id, title, desription, details }) => {
    try {
        const [updated] = await db.FeedBack.update(
            {
                title,
                desription,
            },
            {
                where: { id }
            }
        );
        if (updated !== null) {
            const deletedDetails = await db.feedbackDetails.destroy({ where: { feedBackId: id } });
            if (details && details.length > 0) {
                for (const detail of details) {
                    const createdDetail = await db.feedbackDetails.create({
                        title: detail.title,
                        desription: detail.desription,
                        img: detail.img,
                        feedBackId: id
                    });
                    console.log('Detail created:', createdDetail);
                }
            }

            const updatedDacDiem = await db.FeedBack.findOne({
                where: { id },
                include: [
                    {
                        model: db.feedbackDetails,
                        as: 'details',
                        attributes: ['id', 'title', 'desription', 'img']
                    }
                ]
            });
            console.log("UpdatedDacDiem:", updatedDacDiem);
            
            if (!updatedDacDiem) {
                console.log("No record found for the given ID");
            } else {
                console.log("Details included:", updatedDacDiem.details);
            }
            return {
                message: 'Cập nhật thành công',
                Noibat: updatedDacDiem
            };
        } else {
            return {
                message: 'Bản ghi không tìm thấy'
            };
        }
    } catch (error) {
        throw error;
    }
};


export const deleteFb = (id) => new Promise(async (resolve, reject) => {
    try {
        const deletedDetailsCount = await db.feedbackDetails.destroy({
            where: { feedBackId: id }
        });
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
        throw new Error(`Lỗi khi xóa bản ghi: ${error.message}`);
    }
});