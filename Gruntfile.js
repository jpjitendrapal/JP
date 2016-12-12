module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {

      },
      JS: {
        src: "JS/*.js",
        dest: 'build/JS/scripts.js',
      },
      CSS: {
        src: "CSS/*.css",
        dest: "build/CSS/styles.css"
      }
    },
    watch: {
      JS: {
        files: ['JS/**/*.js'],
        tasks: ['concat:JS'],
        options: {
          spawn: false,
        },
      },
      CSS: {
        files: ["CSS/**/*.css"],
        tasks: ["concat:CSS"],
      }
    },
    react: {
      files: {
        expand: true,
        cwd: 'JS/',
        src: ['*.jsx'],
        dest: 'build/JSX/main',
        ext: '.js',
        tasks: ["concat"]
      }
    },
    browserify: {
      options: {
        transform: [require('grunt-react').browserify]
      },
      app: {
        src: 'build/JSX/main.js',
        dest: 'path/to/target/output.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-react');
  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('test', function () {
    console.log("I am testing");
  });
  grunt.registerTask('default', ['concat', 'react', 'watch']);

};