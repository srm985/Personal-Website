module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 

    grunt.initConfig({
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'test/index.htm': 'index.htm'
                }
            }
        }
    });

    grunt.registerTask('default', ['minifyHtml']);
};
