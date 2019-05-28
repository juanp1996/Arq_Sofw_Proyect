/**
 * Menu.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    name:{type:"string", required: true},
    //image:{type: "file", required: true},
    price:{type:"number", required:true},
    description:{type:"text"},
    type:{type:"string",required:true},
    state:{type:"number"}
  }

};



