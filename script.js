function enviarDatos() {
    var dato1 = document.getElementById('dato1').value;
    var dato2 = document.getElementById('dato2').value;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'guardar_datos.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            var response = JSON.parse(xhr.responseText);

            if (response.success) {
                alert(response.success);
                // Puedes realizar más acciones aquí después de enviar los datos
            } else if (response.error) {
                console.error(response.error);
            }
        } else {
            console.error('Error al enviar datos: ' + xhr.responseText);
        }
    };

    xhr.onerror = function() {
        console.error('Error de red al enviar datos');
    };

    var datos = {
        dato1: dato1,
        dato2: dato2
    };

    var datosQueryString = Object.keys(datos).map(function(key) {
        return key + '=' + encodeURIComponent(datos[key]);
    }).join('&');

    xhr.send(datosQueryString);
}
