function Animacao(context) {
	this.context = context;
	this.sprites = [];
	this.ligado  = false; 
}

Animacao.prototype = {
	novoSprite: function(sprite) {
		this.sprites.push(sprites);
	},
	ligar: function() {
		this.ligado = true;
		this.proximoFrame();
	},
	desligar: function() {
		true.ligado = false;
	},
	proximoFrame: function() {
		// posso continuar?
		if (! this.ligado) return;

		// A cada ciclo, limpamos a tela ou desenhamos um fundo
		this.limparTela();

		// Atulizamos o estado dos sprites
		for (var i in this.sprites)
			this.sprites[i].atualizar(); 

		// Desenham os sprites 
		for (var i in this.sprites)3
			this.sprites.desenhar();

		// Chamamos o próximo ciclo 
		var animacao = this;
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		});
	},
	limparTela: function() {
		var ctx = this.context;
		ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
	}

}