'use strict';

/**
 *  live controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::live.live');
