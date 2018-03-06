// An example configuration file.
exports.config = {
	directConnect: true,
	seleniumAddress: 'http://localhost:4444/wd/hub',
	framework: 'custom',
	frameworkPath: require.resolve('protractor-cucumber-framework'),
  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },
  
  onPrepare: function() {

  		  browser.waitForAngularEnabled(false);	
			browser.ignoreSynchronization = true;

},
 
   cucumberOpts: {
    // require step definitions
    require: [
      './features/step_definitions/*_step.js' // accepts a glob

		]

	
	
  },
  // require feature files
  specs: [
    './features/*.feature'
  ],
  
  


};