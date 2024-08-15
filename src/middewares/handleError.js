import createError from 'http-errors'
export const badRequest = (err,res)=>{
    const error = createError.BadRequest(err)
    return res.status(error.status).json({
        err:1,
        message:error.message
    })
}
export const interalServerError = (res)=>{
    const error = createError.InternalServerError()
    return res.status(error.status).json({
        err:1,
        message:error.message
    })
}

export const notFound = (req,res)=>{
    const error = createError.NotFound('This route is not defind ')
    return res.status(error.status).json({
        err:1,
        message:error.message
    })
}