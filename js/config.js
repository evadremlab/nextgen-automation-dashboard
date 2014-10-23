(function() {
  'use strict';

  // github: evadremlab / W0rri3$Git!

  // TODO: this should be generated from the server

  Accela.module('Config', {
    'CURRENT_VERSION': '0.10.23',
    'PROJECT_NAME': 'NextGen Automation Prototype',
    'APP_ID': '635350425730842425',
    'APP_SECRET': '447a782f6a944c1caa626bf0e483c288',
    'USE_MOCK_SERVICES': true,
    'USE_MOCK_PORTLETS': true,
    'LOG_CLIENT_ERRORS': true,
    'CONSOLE_LOGGING_ENABLED': true,
    'DEFAULT_LIMIT': 25,
    'DEFAULT_OFFSET': 0,
    'API_URL': 'http://dbalmer-vm864.accela.com:5443/',
    'LOG_URL': 'http://localhost/mock/logs',
    'LOG_ACCESS_KEY': 'qkU4zb64gQcin0CZhw/I1f0AtmNjBvE20h2cHvZgnftxiOvMcr8arkzbKXNqQ7XiZtCGiUsM+bbbb0iaG4zF0g==',
    'CONSOLE': {
      'SERVICES': {
        'GET_AVAILABLE_CONSOLES': { mockPath: 'console/', endPoint: 'consoles' },
        'GET_USER_CONSOLE': { mockPath: 'console/', endPoint: 'userConsole' },
        'GET_AGENCY_PORTLETS': { mockPath: 'console/', endPoint: 'portlets' },
        'SAVE_USER_CONSOLE': { mockPath: 'console/', endPoint: 'saveUserConsole' }
      }
    },
    'NAVIGATION' : {
      'TILES': [
        { text: 'Dashboard', visible: true, state: 'home' },
        { text: 'Notifications', visible: true, state: 'home' },
        { text: 'Maps', visible: true, state: 'home' }
      ],
      'BUTTONS': [
        { text: 'Console', visible: true, state: 'console' }
      ]
    }
  });
})();
