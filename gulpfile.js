require('code-forensics').configure(
    {
      repository: {
        rootPath: "/workspaces/Shippit/",
        excludePaths: [
          'db',
          'vendor'
        ]
      },
      layerGroups: {
        'code-test': [
          { name: 'Code', paths: ['app', 'lib', 'frontend'] },
          { name: 'Unit Tests', paths: [/tests\/.*[._]spec\..*/, 'spec'] },
          { name: 'E2E Tests', paths: ['cucumber', 'smoke'] }
        ],
        'mvc-layers': [
          { name: 'Models', paths: [/^app\/\.*models/, /^frontend\/\.*models/] },
          { name: 'Controllers', paths: ['app/controllers'] },
          { name: 'Views', paths: [/^app\/views\/.+\.html$/, 'app/assets'] }
        ]
      }      
    }
  );