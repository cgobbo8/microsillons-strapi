'use strict';

/**
 * emission service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emission.emission');
