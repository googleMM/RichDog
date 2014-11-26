module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    appDir: 'src',
    deployDir: '/inetpub/wwwroot/workspace/richdog',
    uglify: {
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    copy: {
      deploy: {
        cwd: '<%= appDir %>',
        expand: true,
        src: [
          '**/*'
        ],
        dest: '<%= deployDir %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
};
