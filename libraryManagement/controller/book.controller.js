import joi from "joi"

function bookMid(req, res, next) {
    try {
        let ab = joi.object({
            title:joi.string().lowercase().trim().min(2).max(200).required(),
            author:joi.string().lowercase().trim().min(2).max(200).required(),
            price:joi.number().positive().required()
        })

        let {error, value} = ab.validate(req.body);

        if(error) {
            res.status(StatusCodes.BAD_REQUEST.code).json ({
                code:StatusCodes.BAD_REQUEST.code,
                message:error.message,
                data:null
            });
        }
        
        req.body = value;
        next();

    } catch (error) {
        console.log(error);
        logger("error", StatusCodes.INTERNAL_SERVER_ERROR.message)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR.code).json() ({
            code: StatusCodes.INTERNAL_SERVER_ERROR.code,
            message: StatusCodes.INTERNAL_SERVER_ERROR.message,
            data:null
        })
    }
}
export default bookMid;