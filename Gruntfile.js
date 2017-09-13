module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! Grunt Uglify <%= grunt.template.today("yyyy-mm-dd") %> */ '
      },
      build: {
        src: 'yoast-seo-drupal.js',
        dest: 'yoast-seo-drupal.min.js'
      }
    },
    browserify: {
      options: {
        browserifyOptions: {
          standalone: 'YoastSeoDrupal'
        }
      },
      build: {
        src: 'index.js',
        dest: 'yoast-seo-drupal.js'
      }
    },
    sass: {
      options: {
        outputStyle: "compressed"
      },
      build: {
        files: {
          "yoast-seo-drupal.min.css": "yoast-seo-drupal.scss"
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('build', [
  'browserify',
  'uglify',
  'sass'
  ]);
  // Default task(s).
  grunt.registerTask('default', ['build']);

};
