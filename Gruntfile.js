module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		"download-electron": {
			version: "0.26.0",
			outputDir: "./electron",
			rebuild: true
		}
	});

	grunt.loadNpmTasks('grunt-download-electron');

};
