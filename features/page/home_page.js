

var home_page = function(){
const faker = require('faker');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;


 const customerData = {
      email: faker.internet.email()
    
    };
	


	this.irLogin = function(){
	
	
	browser.wait(function() {
			return  element(by.linkText('Entre | Cadastre-se')).isPresent();

				})
	   element(by.linkText('Entre | Cadastre-se')).click();
	};
	
	
	
	this.IrCadastro = function(){
	
	
	element(by.id('input-type-1')).sendKeys(customerData.email);
			element(by.id('optNoclient')).click();
			browser.wait(function() {
			return element(by.id('input-type-3')).isPresent();

				})
				element(by.id('input-type-3')).click();
			element(by.id('input-type-3')).sendKeys("12052560");
			element(by.id('btn_cadastrar')).click();
	
	};
	
	
	this.validaLogin = function(){
	var msg = element(by.className('user-greeting-logout login-name').getText());

	
	expect(msg).toBe('Olá');


	
	};
	

	
};

module.exports = new home_page();

