import db from '../models'
export const addService=({title,slug,description,content,imgThumbnail,metaTitle,metaDescription})=> new Promise(async(resolve,reject)=>{
    try {
        const response = await db.service.create({
            title,slug,description,imgThumbnail,content,metaDescription,metaTitle
        });
        console.log(response)
        resolve({
            message: 'tạo thành công',
            service: response
        });
    } catch (error) {
        console.log(error)
        reject(error);
    }
})