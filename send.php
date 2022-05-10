<?
if ((isset($_POST['name']) && $_POST['name'] != "") && (isset($_POST['phone']) && $_POST['phone'] != "")) {
    $to = $_POST['to'];
    $subject = 'Заявка на обратную связь';
    $message = '
                <html>
                    <head>
                        <title>' . $subject . '</title>
                    </head>
                    <body>
                        <p>Имя: ' . $_POST['name'] . '</p>
                        <p>Телефон: <a href="tel:' . $_POST['phone'] . '">' . $_POST['phone'] . '</a></p>
                    </body>
                </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    mail($to, $subject, $message, $headers);
}
?>;