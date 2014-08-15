module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: ['build'],
        react: {
            files: {
                expand: true,
                cwd: 'src',
                src: ['**/*.jsx'],
                dest: 'build/es6',
                ext: '.js'
            }
        },
        traceur: {
            options: {
                experimental: true
            },
            custom: {
                files: [{
                    expand: true,
                    cwd: 'build/es6',
                    src: ['**/*.js'],
                    dest: 'build/es5'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['src/**/*.jsx'],
                tasks: ['clean', 'react', 'traceur', 'concat', 'copy'],
                options: {
                    interrupt: true
                }
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
                src: ['build/es5/reducers/**/*.js', 'build/es5/transducers/**/*.js', 'build/es5/components/**/*.js', 'build/es5/stratus.js'],
                dest: 'build/stratus.<%= pkg.version %>.js'
            },
            css: {
                src: 'assets/css/*.css',
                dest: 'build/stratus.<%= pkg.version %>.css'
            }
        },
        copy: {
            main: {
                files: [
                    {
                        expand: true,
                        src: 'build/stratus.<%= pkg.version %>.js',
                        dest: 'dist/',
                        flatten: true                    },

                    {
                        expand: true,
                        src: 'build/stratus.<%= pkg.version %>.css',
                        dest: 'dist/',
                        flatten: true
                    }
                ]
            }
        },
        uglify: {
          options: {
            banner: '/*! stratus <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'build/stratus.<%= pkg.version %>.js',
            dest: 'dist/stratus.<%= pkg.version %>.min.js'
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
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-traceur');
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', ['clean', 'react', 'traceur', 'concat', 'copy']);
    grunt.registerTask('init', ['shell:bower']);
};