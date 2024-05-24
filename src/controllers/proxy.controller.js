import axios from "axios";

export const proxyRequest = async (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Bad Request: URL parameter is required.');
  }

  try {
    const response = await axios.get(url, {
      responseType: 'arraybuffer',  // Manejar binarios, como imágenes, correctamente
      headers: {
        // Puedes agregar encabezados personalizados aquí si es necesario
        'Access-Control-Allow-Origin': '*',
        'User-Agent': 'PostmanRuntime/7.37.3',
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive'
      },

    });
    res.set({
      'Content-Type': response.headers['content-type'],
      'Access-Control-Allow-Origin': '*',  // Permitir CORS en la respuesta
    });
    res.status(response.status).send(response.data);
  } catch (error) {
    console.log(error);
    res.status(error.response ? error.response.status : 500).send(error.message);
  }
};

// controllers/proxyController.js

// exports.proxyRequest = async (req, res) => {
//   const url = req.query.url;
//   if (!url) {
//     return res.status(400).send('Bad Request: URL parameter is required.');
//   }

//   try {
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         // Puedes agregar encabezados personalizados aquí si es necesario
//         'Access-Control-Allow-Origin': '*',
//         'User-Agent': 'PostmanRuntime/7.37.3',
//         'Accept': '*/*',
//         'Accept-Encoding': 'gzip, deflate, br',
//         'Connection': 'keep-alive'
//       },
//     });

//     if (!response.ok) {
//       throw new Error(`Error fetching URL: ${response.statusText}`);
//     }

//     const contentType = response.headers.get('content-type');
//     const buffer = await response.buffer();

//     res.set({
//       'Content-Type': contentType,
//       'Access-Control-Allow-Origin': '*',  // Permitir CORS en la respuesta
//     });
//     res.status(response.status).send(buffer);
//   } catch (error) {
//     console.error('Error fetching URL:', error.message);
//     res.status(error.response ? error.response.status : 500).send('Error fetching URL: ' + error.message);
//   }
// };
