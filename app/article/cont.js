'use strict';

const articleDal = require('./dal');

const result = require('../../util/res');
const log = require('../../util/log');

exports.create = (req, res) => {
    let {
        headline, source_url, image_url,
        summary, category, user
    } = req.body;

    if (!headline || !headline.trim()) {
        result.error('No headline provided', res);
    }
    if (!source_url || !source_url.trim()) {
        result.error('No source_url provided', res);
    }
    if (!image_url || !image_url.trim()) {
        result.error('No image_url provided', res);
    }
    if (!summary || !summary.trim()) {
        result.error('No summary provided', res);
    }
    if (!category || !category.trim()) {
        result.error('No category provided', res);
    }
    if (!user || !user.trim()) {
        result.error('No user provided', res);
    }



    result.messageStatus('Article created', 201, res);
};

exports.findAll = (req, res) => {
    articleDal
        .findAll()
        .then(articles => {
            result.data(articles, res);
        })
        .catch(reject => {
            result.errorReject(reject, res);
        });
};

exports.validateOne = (req, res, next, articleId) => {
    articleDal
        .findOne({_id: articleId})
        .then(article => {
            if (article) {
                req.article = article;
                next();
            } else {
                result.errorStatus(`Article with _id ${articleId} does not exist`, 404, res);
            }
        });
};

exports.findOne = (req, res) => result.data(req.article, res);