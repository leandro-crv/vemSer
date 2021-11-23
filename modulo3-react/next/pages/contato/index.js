function Contato(){
  return(
    <div class="container">
            <h1>Contato</h1>
            <form id="formulario" action="">
                <input id="nome-completo" type="text" placeholder="digite seu nome completo" required/>
                <br/><br/>
                <input id="email" type="email" placeholder="insira seu e-mail" required/>
                <br/><br/>
                <label for="motivo-contato">Qual motivo do contato</label>
                <br/>
                <select id="motivo-contato">
                    <option value="HTML">HTML é easy demais</option>
                    <option value="CSS">CSS é easy demais</option>
                    <option value="js">JS é easy demais</option>
                </select> 
                <br/><br/>
                <label for="mensagem">Deixe sua mensagem</label>
                <br/>
                <textarea id="mensagem" cols="50" rows="10"></textarea>
                <br/><br/>
                <input type="submit" class='enviar'/>
            </form>
        </div>
  );
}

export default Contato;