const { response} = require('express');


const userGet = (req, res = response) => {
    const query = req.query;
    res.json({
        msg: 'get API - Controllers',
        query
    });
}

const userPut = (req, res = response) => {
    const id = res.params.id;
    res.json({
        msg: 'put API - Controllers',
        id
    });
}

const userPost = (req, res) => {
    const body = req.body;

    res.json({
        msg: 'post API - Controllers',
        body
    });
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - Controllers'
    });
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - Controllers'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
    userPatch
}