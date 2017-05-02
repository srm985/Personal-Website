module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 

    grunt.initConfig({
        clean: {
            build: {
                src: ['web/']
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, cwd: 'php', src: '**/*', dest: 'web/php/' },
                    { expand: true, cwd: 'documents', src: '**/*', dest: 'web/documents/' }
                ]
            }
        },
        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'web/autonomous_drone.htm': 'autonomous_drone.htm',
                    'web/bearing_wipe.htm': 'bearing_wipe.htm',
                    'web/bit_error.htm': 'bit_error.htm',
                    'web/contact.htm': 'contact.htm',
                    'web/footer.htm': 'footer.htm',
                    'web/graphic_design.htm': 'graphic_design.htm',
                    'web/header.htm': 'header.htm',
                    'web/index.htm': 'index.htm',
                    'web/poc_website.htm': 'poc_website.htm',
                    'web/portfolio.htm': 'portfolio.htm',
                    'web/statistical_analysis.htm': 'statistical_analysis.htm',
                    'web/statistical_maintenance.htm': 'statistical_maintenance.htm',
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css/',
                    src: '**/*.css',
                    dest: 'web/css/'
                }]
            }
        },
        uglify: {
            options: {
                compress: true,
                mangle: true
            },
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'js/',
                    src: '**/*.js',
                    dest: 'web/js/'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'web/images'
                }]
            }
        }
    });

    grunt.registerTask('default', ['clean', 'copy', 'minifyHtml', 'cssmin', 'uglify', 'imagemin']);
};
