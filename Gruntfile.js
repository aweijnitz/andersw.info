module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          { expand: true, cwd: 'src/public_html/', src: ['**', '!**/*.js'], dest: 'dist/public_html'}
        ],
      },
    },
    uglify: {
      options: {
        mangle: {
          except: ['$','jQuery']
        }
      },

      build: {
        files: [{
          expand: true,
          cwd: 'src/public_html/js',
          src: '**/*.js',
          dest: 'tmp/js.minified'
        }]
      }
    },
    concat: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
        separator: ';'
      },
      dist: {
        src: ['tmp/js.minified/*js'],
        dest: 'dist/public_html/js/code.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['copy', 'uglify', 'concat']);

};
