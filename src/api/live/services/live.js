'use strict';

/**
 * live service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::live.live');
