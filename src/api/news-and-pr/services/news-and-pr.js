'use strict';

/**
 * news-and-pr service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::news-and-pr.news-and-pr');
