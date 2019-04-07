module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {
            expand: true,
            cwd: 'src/public_html',
            src: ['**', '!assets/css/*.css'],
            dest: 'dist/public_html'}
        ]
      }
    },
    watch: {
      scripts: {
        files: ['src/public_html/**/*.js', 'src/public_html/**/*.html', 'src/public_html/**/*.css' ],
        tasks: ['default'],
        options: {
          spawn: true
        },
      },
    },
    cssmin: {
      combine: {
        files: {
          'dist/public_html/assets/css/all.css': ['src/public_html/assets/css/**/*.css']
        }
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: [{
          expand: true,
          cwd: 'src/public_html',
          src: '**/*.html',
          dest: 'dist/public_html'
        }]
      }
    },
    clean: ["tmp", "dist/public_html"]
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['clean','copy', 'htmlmin', 'cssmin']);

};
