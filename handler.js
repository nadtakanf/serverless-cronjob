'use strict'
const axios = require('axios')
const aws = require('aws-sdk')

module.exports.handler = async event => {
    console.log('handler.....')
    console.log(event);

    switch(process.env.STAGE){
      case 'qa':
        // making a request to ql 
      case 'prod':
        // making a request to prod
    }
}
