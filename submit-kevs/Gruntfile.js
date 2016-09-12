'use strict';

module.exports = function (grunt) {
  grunt.initConfig({
    kevoree: {
      main: {
        options: {
          runtime: 'next'
        }
      }
    },

    kevoree_genmodel: {
      main: {}
    }
  });

  grunt.loadNpmTasks('grunt-kevoree');
  grunt.loadNpmTasks('grunt-kevoree-genmodel');

  grunt.registerTask('default', 'build');
  grunt.registerTask('build', ['kevoree_genmodel']);
  grunt.registerTask('kev', ['build', 'kevoree'])
};
