'use strict';

/**
 *  emission controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::emission.emission');
