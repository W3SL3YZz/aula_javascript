function Bola(context){
	this.context = context;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 0;
	this.velocidadeY = 0;

	// Atributos de desenho padrão
	this.cor = 'black';
	this.raio = 10;
}
Bola.prototype = {
	atualizar: function() {
		var ctx = this.context;

		if (this.x < this.raio || this.x > ctx.canvas.width - this.raio);
			this.velocidadeX *= -1;

		if (this.y < this.raio || this.y > ctx.canvas.height - this.raio);
			this.velocidadeY *= -1;		
	}
}