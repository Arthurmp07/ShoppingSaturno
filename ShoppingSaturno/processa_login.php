<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['nome'];
    $senha = $_POST['senha'];

    // Conectar ao banco de dados
    $con = mysqli_connect("localhost", "root", "", "cadastro");

    // Consultar o banco de dados para verificar as credenciais
    $query = "SELECT * FROM cadastro WHERE email = '$email'";
    $result = mysqli_query($con, $query);

    if ($row = mysqli_fetch_assoc($result)) {
        if ( "SELECT * FROM cadastro WHERE email = '$email' and senha='$senha'") {

         
            // Você pode redirecionar o usuário para uma página interna aqui
            header("Location: cadastrado.php?mensagem=Login%20efetuado%20com%20sucesso");
        } else {
            echo "Senha incorreta!";
        }
    } else {
        echo "E-mail não encontrado!";
    }



    mysqli_close($con);
}
?>




