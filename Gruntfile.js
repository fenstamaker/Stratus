module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        react: {
            files: {
                expand: true,
                cwd: 'src/components',
                src: ['*.jsx'],
                dest: 'build',
                ext: '.js'
            }
        },
        concat: {
            js: {
                options: {
                    // Replace all 'use strict' statements in the code with a single one at the top
                    banner: "'use strict';\n",
                    process: function(src, filepath) {
                        return '// Source: ' + filepath + '\n' +
                            src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
                    }
                },
                src: ['build/*.js', 'src/*.js'],
                dest: 'build/<%= pkg.name %>.<%= pkg.version %>.js'
            },
            css: {
                src: 'assets/css/*.css',
                dest: 'build/.<%= pkg.version %>.css'
            }
        },
        copy: {
            main: {
                file: [
                    {
                        expand: true,
                        src: 'build/<%= pkg.name %>.<%= pkg.version %>.js',
                        dest: 'target/'
                    },
                    {
                        expand: true,
                        src: 'build/<%= pkg.name %>.<%= pkg.version %>.css',
                        dest: 'target/'
                    }
                ]
            }
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'build/<%= pkg.name %>.<%= pkg.version %>.js',
            dest: 'dist/<%= pkg.name %>.<%= pkg.version %>.min.js'
          }
        },
        shell: {
            bower: {
                command: 'node_modules/.bin/bower install',
                options: {
                    stdout: true
                }
            }
        }
    });
    
//    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', ['clean', 'react', 'concat', 'copy', 'uglify']);
    grunt.registerTask('init', ['shell:bower']);
};