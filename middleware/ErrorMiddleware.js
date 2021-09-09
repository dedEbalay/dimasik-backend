const apiError = require('../error/ApiError');

function errorMiddleware (error, req, res, next) {
    if (error instanceof apiError) {
       return res.status(error.status).json({message: `Ошибка: ${error.message}`})
    }
    return res.status(500).json({message:"Oops, I didn't expect this ERROR, don't do that"})
}

module.exports = errorMiddleware;