module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish')
      },
      all: [ '../js/main.js']
    },

    processhtml:{
      options: {
       data:{
        message: 'hello world!'
       }
      },
      dist:{
        files:{'../index.html':['../dest/index.html']}
      }
    },
    uglify:{
      options:{
        banner:'/*\n<%= pkg.name %> minified version 01-29-15 <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build:{
        files:{
          '../js/main.min.js':'../js/main.js',
          '../js/bootstrap.min.js':'../js/bootstrap.js',
          '../js/classie.min.js':'../js/classie.js',
          '../js/freelancer.min.js':'../js/freelancer.js',
          '../js/owl.carousel.min.js':'../js/owl.carousel.js',
          '../js/jquery.min.js':'../js/jquery-1.10.2.js',
          '../js/modernizr.min.js':'../js/modernizr.custom.25376.js',
          '../js/jquery.scrollmagic.min.js':'../js/jquery.scrollmagic.js'
        }
      }
    },

    

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  CSS \n*/\n'
      },
      build: {
        files: {
           '../css/bootstrap.min.css':'../css/bootstrap.css',
           '../css/freelancer.min.css':'../css/freelancer.css',
           '../css/component.min.css':'../css/component.css',
           '../css/owl.carousel.min.css':'../css/owl.carousel.css',
           '../css/owl.theme.min.css':'../css/owl.theme.css',
           '../css/pace-theme-barber-shop.min.css':'../css/pace-theme-barber-shop.css'
        }
      }
    },
    // configure watch to auto update ------------------------------------------
    watch: {
      stylesheets: {
        files: ['../css/*.css'],
        tasks: 'cssmin'
      },
      scripts: {
        files: '../js/main.js',
        tasks: ['jshint','uglify'] 
      }
    }

  });

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-processhtml');
  // ===========================================================================
  // CREATE TASKS ==============================================================
  // ===========================================================================
  grunt.registerTask('default', ['jshint','uglify', 'cssmin']);
   grunt.registerTask('production', ['processhtml']);

};