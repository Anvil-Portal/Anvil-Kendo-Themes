module.exports = {
    extends: [
        'sass-build:recommended'
    ],
    build: [
        //{
        //    cwd: 'packages/default',
        //    file: 'scss/all.scss',
        //    outFile: 'dist/all.css'
        //},
        {
            cwd: 'packages/bootstrap',
            file: 'scss/all.scss',
            outFile: '/git/2023_09_23/Solutions/Anvil-Portal-Security/Anvil.Portal.Security.Web/wwwroot/css/themes/bootstrap/kendo-bootstrap.css'
        },
        //{
        //    cwd: 'packages/classic',
        //    file: 'scss/all.scss',
        //    outFile: 'dist/all.css'
        //},
        //{
        //    cwd: 'packages/material',
        //    file: 'scss/all.scss',
        //    outFile: 'dist/all.css'
        //},
        //{
        //    cwd: 'packages/nouvelle',
        //    file: 'scss/all.scss',
        //    outFile: 'dist/all.css'
        //},
        //{
        //    cwd: 'packages/fluent',
        //    file: 'scss/all.scss',
        //    outFile: 'dist/all.css',
        //    compiler: 'sass',
        //    api: 'modern'
        //},
        {
            cwd: 'packages/core',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        },
        {
            cwd: 'packages/utils',
            file: 'scss/all.scss',
            outFile: 'dist/all.css'
        }
    ]
};
