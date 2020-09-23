module.exports = {
  options: {
    debug: true,
    // read strings from functions: IllegalMoveError('KEY') or t('KEY')
    func: {
      list: ['t'],
      extensions: ['.tsx', '.ts', '.js'],
    },

    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
    },

    // Create and update files `en.json`, `fr.json`, `es.json`
    lngs: ['hu', 'en', 'de'],

    ns: [
      // The namespace I use
      'translation',
    ],

    defaultLng: 'hu',
    defaultNs: 'translation',

    // Put a blank string as initial translation
    // (useful for Weblate be marked as 'not yet translated', see later)
    // defaultValue: (lng, ns, key) => '',

    // Location of translation files
    resource: {
      loadPath: 'public/locales/{{lng}}/{{ns}}.json',
      savePath: 'public/locales/{{lng}}/{{ns}}.json',
      jsonIndent: 4,
    },

    nsSeparator: ':',
    keySeparator: '.',
  },
};
