module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
                src: ['build/*.js', 'src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            css: {
                src: 'assets/css/*.css',
                dest: 'dist/<%= pkg.name %>.css'
            }
        },
        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },
          build: {
            src: 'dist/<%= pkg.name %>.js',
            dest: 'dist/<%= pkg.name %>.min.js'
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
    grunt.loadNpmTasks('grunt-react');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('build', ['react', 'concat', 'uglify']);
    grunt.registerTask('init', ['shell:bower']);
};