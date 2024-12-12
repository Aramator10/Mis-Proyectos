<?php
    $servername = "localhost";
    $username = "Aram";
    $password = "Arl22015#";
    $dbname = "TWH_CLAN";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $nombre = $_POST['Nombre'];
        $nick = $_POST['Nick_FN'];
        $motivo = $_POST['motivo'];

        $sql = "INSERT INTO solicitudes (nombre, nick_fn, motivo) 
                VALUES ('$nombre', '$nick', '$motivo')";

        if ($conn->query($sql) === TRUE) {
            echo "<p class='success'>Solicitud enviada correctamente</p>";
        } else {
            echo "<p class='error'>Error: " . $sql . "<br>" . $conn->error . "</p>";
        }
    }

    $conn->close();
    ?>