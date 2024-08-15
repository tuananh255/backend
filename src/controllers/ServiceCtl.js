import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const addService =async (req,res)=>{
    try {
        const {title,slug,description,content,imgThumbnail,metaTitle,metaDescription} = req.body
        console.log(title,slug,description,content,imgThumbnail,metaTitle,metaDescription)
        if(title=="" || slug=="" || description=="" || content=="" ||imgThumbnail=="" || metaTitle=="" || metaDescription ==="") return res.status(400).json({
            err:1,
            message:"Missing payload"
        })
        
        const response = await service.addService({title,slug,description,content,imgThumbnail,metaTitle,metaDescription})
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

module.exports={
    addService
}