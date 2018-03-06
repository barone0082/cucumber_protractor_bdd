var geradorCPF_step = function(){


this.cpfGerado = function(){
				
				
			browser.waitForAngularEnabled(false);	
			browser.ignoreSynchronization = true;
			browser.get('https://www.geradordecpf.org/',1000);
			element(by.id('btn-gerar-cpf')).click();
			var cpf = element(by.id('numero')).getText();
			
			
			return cpf;
			
			
			}
			
}			
			module.exports = new geradorCPF_step();
