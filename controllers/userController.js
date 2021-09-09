const apiError = require('../error/ApiError'),
      bcript = require('bcrypt'),
      jwt = require('jsonwebtoken'),
      { User } = require('../models/models');

const generateJWT = (id, email, role = USER) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '12h'}
        );
}

class UserController {

    async registration ( req, res, next ) {
        const { email, password, role } = req.body;

        if (!email || !password) {
            return next(apiError.badRequest('Пользователь или почта не заданы'));
        }

        const candidate = await User.findOne({where: {email}});

        if (candidate) {
            return next(apiError.badRequest('Пользователь уже существует'));
        }
        
        const hashPass = await bcript.hash(password, 4),
              user = await User.create({email, role, password: hashPass}),
              token = generateJWT(user.id, email, role)
                
        return res.json({token});
    }

    async login ( req, res, next ) {

        const { email, password} = req.body,
              user = await User.findOne({where: {email}});

        if (!user) {
            return next(apiError.badRequest('Пользователь не найден'));
        }

        const comparePass = bcript.compareSync(password, user.password);

        if (!comparePass) {
            return next(apiError.badRequest('Неверный пароль'));
        }

        const token = generateJWT(user.id, user.email, user.role);

        return res.json({token});

    }
     
    async auth ( req, res ) {
        const token = generateJWT(req.user.id, req.user.email, req.user.role);
        return res.json({token})
    }

}

module.exports = new UserController;