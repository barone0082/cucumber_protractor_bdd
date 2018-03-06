var geradorCPF_step = require('../support/geradorCPF_step.js');
const faker = require('faker');


 const customerData = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetName() + ', ' + faker.random.number(),
      city: faker.address.city(),
      country: faker.address.country()
    };
	
	
var cadastro_page = function(){

	
	this.preencherCamposPF = function(){
		
		
		
		browser.wait(function() {
			return element(by.id('fisica-nome')).isPresent();

				},10000);
	
 
 
		  
			element(by.id('cpf-nregister')).click();
			element(by.id('cpf-nregister')).sendKeys(cpf);
			element(by.id('fisica-nome')).sendKeys(customerData.name);
			element(by.id('fisica-sobrenome')).sendKeys(customerData.name);
			element(by.id('fisica-rg')).sendKeys("537654802");
			element(by.id('date-nregister')).click();
			element(by.id('date-nregister')).sendKeys('20121999');
			element(by.cssContainingText('option', 'Masculino')).click();
			element(by.id('fisica-telefone-fixo-ddd')).sendKeys("11");
			element(by.id('fisica-telefone-fixo')).sendKeys("41637800");
			element(by.id('fisica-telefone-adicional-ddd')).sendKeys("11");
			element(by.id('fisica-telefone-celular')).sendKeys("985376540");
			element(by.id('fisica-senha')).sendKeys("1230");
			element(by.className('w-125-nregister r10-nregister')).sendKeys('1230');
			element(by.className('w-70-nregister r13-nregister')).sendKeys('1230');
			element(by.id('bt-submit-fisica')).click();
			
			
				browser.sleep('35000');

		
	}
	
	this.preencherCamposPJ = function(){
		
		
	}

	
	
};

module.exports = new cadastro_page();
