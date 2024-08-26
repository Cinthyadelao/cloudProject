/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
// exports.handler = async (event) => {
//   console.log(`EVENT: ${JSON.stringify(event)}`);
//   return {
//     statusCode: 200,
//     //  Uncomment below to enable CORS requests
//     //  headers: {
//     //      "Access-Control-Allow-Origin": "*",
//     //      "Access-Control-Allow-Headers": "*"
//     //  },
//     body: JSON.stringify('Hello from Lambda!'),
//   };
// };

exports.handler = async (event) => {
  const params = {
    TableName: 'Artiste', // Nombre de tu tabla existente
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data.Items),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // Para CORS
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Error al obtener artistas',
        error: error.message
      }),
    };
  }
};
