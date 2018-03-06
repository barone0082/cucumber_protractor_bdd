
//objetos sendo criados das pages
var home_page = require('../page/home_page.js');
var definePagina = require('../support/definePagina.js');
var cadastroPage = require('../page/cadastro_page.js');
var geradorCPF = require('../support/geradorCPF_step.js');

//requires adicionais
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

  

	
  module.exports = function () {
	  
	  
	  
	   this.Given(/^Que gerei o cpf no gerador$/, function () {
		   
		   geradorCPF.cpfGerado();
       });
	  
	  
	  
		 this.Given(/^Que estou no site da "([^"]*)"$/, function (site) {
					
					
					if(site=='centauro'){
						
						definePagina.centauro();
		 }else{
			
			
		 }
         });
		 
		 
		
		 
         this.Given('Vou até a tela de cadastro de usuario', function () {
			home_page.irLogin();
			home_page.IrCadastro();

         });
		 
			this.When(/^Realizo o meu cadastro como "([^"]*)"$/, function (tipoPessoa, callback) {   
		  if (tipoPessoa=='pf'){
			cadastroPage.preencherCamposPF();
		  }else{  
		cadastroPage.preencherCamposPJ();
		  } 
		  callback(null);
         });

         this.Then('devo ter o cadastro com sucesso', function () {
			 
			 home_page.validaLogin();
           
         });


      
};