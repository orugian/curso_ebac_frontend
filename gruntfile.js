module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files:{
          'dev/styles/main.css' : 'src/styles/main.less'
        }
      },
      production:{
        options:{
          compress: true,
        },
        files:{
          'dist/styles/main.min.css' : 'src/styles/main.less'
        }
      }
    },
    watch:{
      less:{
        files: ['src/styles/**/*.less'],
        tasks: ['less:development']
      },
    },
    replace:{
      dev:{
        options:{
          patterns: [
            {
              match: 'ENDERECO_DO_CSS',
              replacement: './styles/main.css'
            },
            {
              match: 'ENDERECO_DO_JS',
              replacement: '../src/styles/sripts/main.js'
            }
          ]
        },
        files: [
          {
            expand: true,
            flatten: true,
            src: ['src/index.html'],
            dest: 'dev/'
          }
        ]
      },
      dist: {
        options: {
            patterns: [
                {
                    match: 'ENDERECO_DO_CSS',
                    replacement: './styles/main.min.css'
                },
                {
                    match: 'ENDERECO_DO_JS',
                    replacement: './scripts/main.min.js'
                }
            ]
        },
        files: [
            {
                expand: true,
                flatten: true,
                src: ['src/index.html'],
                dest: 'dist/'
            }
        ]
    }
  },

      clean: [''],
        uglify: {
          target:{
            files:{
              'dist/scripts/main.min.js' : 'src/styles/scripts/main.js'
            } 
          }
        }
  })


grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-replace');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-htmlmin');

grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['less:production','less:development', 'replace:dist', 'replace:dev', 'uglify' ]);
}