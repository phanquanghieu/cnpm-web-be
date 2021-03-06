/**
 * Picture.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idObject: { type: 'string', required: true },
    path: { type: 'string', required: true},
    description: { type: 'string'},
  },

};

