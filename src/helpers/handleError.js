/**
 * A function that receives two parameters, res and err. It prints the error to the console, sets the
 * status of the response to 500, and sends a message to the client.
 * @param res - The response object
 * @param err - The error object
 */
const httpError = (res, err) => {
    console.log(err)
    res.status(500)
    res.send({ error: '¡Ha ocurrido un error en el servidor!' })
}

module.exports = { httpError }