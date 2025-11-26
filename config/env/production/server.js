module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // INDISPENSABLE : permet d'écouter l'extérieur
  port: env.int('PORT', 1337),  // Bonnes pratiques
  url: env('MY_HEROKU_URL'),           // Votre URL publique
  app: {
    keys: env.array('APP_KEYS'), // Sécurité requise pour Strapi v4
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
