'use strict';

/**
 * emission router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::emission.emission');
