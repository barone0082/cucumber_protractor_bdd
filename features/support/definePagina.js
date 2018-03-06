var definePagina = function(){

this.centauro = function(){
					
					browser.waitForAngularEnabled(false);	
					browser.ignoreSynchronization = true;
					browser.get('http://www.centauro.com.br',1000);
					browser.driver.manage().window().maximize();
			
			}
			
}	
			module.exports = new definePagina();
