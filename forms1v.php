<?php
include_once 'header.php';
?>
<link rel="stylesheet" href="style.css">
<link rel="stylesheet" href="headerNav/headernavstylesscripts/headerNav.css">
<link rel="stylesheet" href="carrouseel/carrouselStylesScripts/carrousel.css">
<link rel="stylesheet" href="main/main.css">
<link rel="stylesheet" href="cadastro.css">
   
        <!--FORMULÁRIO DE CADASTRO-->
        <div class="content">   
        <div id="login">
          <form method="POST" action="processa_login.php"> 
            <h1>Login</h1> 
             
            
           
            <p> 
              <label for="email">Seu e-mail</label>
              <input id="email" name="email" required="required" type="email" placeholder="contato@htmlecsspro.com"/> 
            </p>
    
             
            <p> 
              <label for="senha">Sua senha</label>
              <input id="senha" name="senha" required="required" type="password" placeholder="ex. 1234"/>
            </p>
             
            <p> 
          
              <input type="submit" name="submit"  value="Login"/> 
            </p>
             
            <p class="link">  
              Não possui conta?
              <a href="Cadastro.php"> Ir para Cadastro </a>
            </p>
          </form>
        </div>
      </div>
    </div>  
    
</main>
    <footer>
        - &copy; 2023 - Data
    </footer>

    <script src="script.js"></script>
</body>

</html>