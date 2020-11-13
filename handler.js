'use strict';
const axios = require('axios');

module.exports.hello = async event => {
    console.log('hello world!')
    const data = await axios.get("/some_url_endpoint");
    return data;
};
