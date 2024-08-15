import { interalServerError } from "../middewares/handleError"
import * as service from "../services"


const incrementViewCount  =async (req,res)=>{
    try {
        const { homeId } = req.body; // Giả sử bạn gửi `homeId` từ phía client
        if (!homeId) {
            return res.status(400).json({
                message: 'Missing homeId'
            });
        }
        const response = await service.incrementViewCount(homeId);
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

const getViewCount  =async (req,res)=>{
    try {
        const response = await service.getAllViewCount();
        return res.status(200).json(response);
    } catch (error) {
        return interalServerError(res);
    }
}

module.exports ={
    incrementViewCount ,getViewCount
}