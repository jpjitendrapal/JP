module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {

      },
      JS: {
        src: ['JS/firstTemplate.js', 'JS/index.js'],
        dest: 'build/JS/scripts.js',
      },
      CSS: {
        src: ["CSS/index.css", "CSS/about.css"],
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
        files:["CSS/**/*.css"],
        tasks: ["concat:CSS"],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', function () {
    console.log("I am testing");
  });
  grunt.registerTask('default', ['concat', 'watch']);

};