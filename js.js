async function actualizarSucursal() {
    try {
        // Primera llamada para obtener el token
        const loginResponse = await fetch('https://mapasgv.com:5050/login/', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify({
                usermail: 'RAMFI202020@example.com',
                password: '123456'
            })
        });

        if (!loginResponse.ok) {
            throw new Error(`HTTP error! Status: ${loginResponse.status}`);
        }

        const loginData = await loginResponse.json();
        const token = loginData.access_token; // Asumiendo que el token viene en esta propiedad
        console.log("token", token)
        // Segunda llamada usando el token
        const updateResponse = await fetch('https://mapasgv.com/sucursales/7784', {
            method: 'PUT',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, PUT, GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            },
            body: JSON.stringify({
                "a_domingo": "",
                "a_lunes_viernes": null,
                "a_sabado": "",
                "agente_de_cambio": "N",
                "banco_vimenca": "Y",
                "d_domingo": "",
                "d_lunes_viernes": null,
                "d_sabado": "",
                "dias_feriados": "",
                "dias_feriados_a": "2:22 pm - 2:22 pm",
                "dias_feriados_b": "",
                "direccion": "22",
                "domingo_a": "2:22 pm - 2:22 pm",
                "domingo_b": "2:22 pm - 2:22 pm",
                "jueves_a": "",
                "jueves_b": "",
                "latitud": 17.74099157,
                "longitud": -71.00654677,
                "lunes_a": "",
                "lunes_b": "",
                "lunes_viernes_a": "11:11 am - 11:11 am",
                "lunes_viernes_b": "11:11 am - 11:11 am",
                "martes_a": "",
                "martes_b": "",
                "miercoles_a": "",
                "miercoles_b": "",
                "nombre_oficina": "22222222desde local ttttttttt",
                "pagatodo": "N",
                "provincia": "",
                "remesas": "N",
                "sabado_a": "2:22 pm - 2:22 pm",
                "sabado_b": "2:22 pm - 2:22 pm",
                "servicio_principal": "Remesas",
                "telefono": "22",
                "tipo_de_oficina": "Estafeta",
                "viernes_a": "",
                "viernes_b": "",
                "vimenpaq": "N"
            })
        });

        if (!updateResponse.ok) {
            throw new Error(`HTTP error! Status: ${updateResponse.status}`);
        }

        const updateData = await updateResponse.json();
        console.log('Sucursal actualizada:', updateData);

    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamar a la función
actualizarSucursal(); 