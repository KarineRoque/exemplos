			function escreve_mensagem(valor){
				mensagem = "Você escreveu '"+valor+"' ";
				alert(mensagem);
				if(isNaN(valor)){
					alert(valor + " não é um numero");
				}else{
					alert(valor + "é um número");
				}
			}