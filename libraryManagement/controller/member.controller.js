import joi from "joi"

function memberMid(req, res, next) {
    try {
        let ab = joi.object({
            name:joi.string().lowercase().trim().min(2).max(200).required(),
            membershipType:joi.string().valid('Normal', 'Gold').default('Normal').required()
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
export default memberMid;