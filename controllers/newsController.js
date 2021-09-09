const uuid = require('uuid'),
      path = require('path'),
      apiError = require('../error/ApiError'),
      jwt = require('jsonwebtoken');

const { News } = require("../models/models");

class newsController {

    async post ( req, res ) {
        try {
            const { title, text } = req.body,
                  { img } = req.files;

            let filename = uuid.v4() + '.jpg';

            img.mv(path.resolve(__dirname, '..', 'static', 'img', filename));

            const news = await News.create({ title, text, imgUrl: filename});

            return res.json(news);

        } catch(e) {

            apiError.badRequest(e.message);

        }
    }

    async getAll ( req, res ) {
        const news = await News.findAll();

        return res.json(news);

    }
     
    async getOne ( req, res, next ) {

        const { id } = req.params,
                news = await News.findOne({where:{id}});

        if (!news) {
            return next(apiError.badRequest('Новости не существует'));
        }

        return res.json(news);

    }

}

module.exports = new newsController;