const { httpError } = require("../helpers/handleError");
const { Premio } = require("../models/premioNobel");

 
async function getDatos(req,res){
    try {
        const datos = await Premio.find({}).limit(20);
        res.send(datos)
    } catch (e) {
        httpError(res, e)
    }
    
}


async function getCategoriaLiteratura(req,res){
    try {
        const newUsuario = await Premio.find({'category.en':'Literature'});
        res.send(newUsuario);
    } catch (e) {
        httpError(res, e)
    }
   
}

async function getCategoriaQuimica(req,res){
    try {
        const newUsuario = await Premio.find({'category.en':'Chemistry'});
        res.send(newUsuario);
    } catch (e) {
        httpError(res, e)
    }
}

async function getCategoriaPaz(req,res){
    try {
        const newUsuario = await Premio.find({'category.en':'Peace'});
        //length solo se ocupara para medir el rango de las los arreglos 
        res.send(newUsuario);
    } catch (e) {
        httpError(res, e)
    }
    
}

/**
 * It's an async function that uses the find method to find all the documents in the Premio collection
 * that have the awardYear property equal to 1901.
 * 
 * The find method returns a promise, so we use the await keyword to wait for the promise to resolve.
 * 
 * The find method returns an array of documents, so we send that array to the client.
 * 
 * If an error occurs, we call the httpError function.
 * @param req - The request object.
 * @param res - the response object
 */
async function getAño1901(req,res){
    try {
        const año1901 = await Premio.find({'awardYear':'1901'});
        res.send(año1901);
    } catch (e) {
        httpError(res, e)
    }
}


/**
 * "getPremioM500k" is an async function that returns a promise. 
 * The promise is resolved with the result of the "Premio.find" function. 
 * The "Premio.find" function returns a promise that is resolved with the result of the "Premio.find"
 * function. 
 * @param req - request
 * @param res - the response object
 */
async function getPremioM500k(req,res){
    try {
        const premioM500K = await Premio.find({$where: "this.prizeAmount > 500000"})
        res.send(premioM500K)
    } catch (e) {
        httpError(res,e)
    }
}

/**
 * It takes the id from the Premio collection and uses it to find the corresponding id in the
 * Declaraciones collection.
 * @param req - The request object.
 * @param res - the response object
 */
async function getDeclaraciones(req,res){
    try {
        const declaraciones = await Premio.aggregate(
            [
                {
                    $lookup:
                   {
    
                        from: "declaraciones", // 2
                        localField: "laureates.id", // 1 (Publicaciones)
                        foreignField: "id", // 2
                        as: "premioDeclaraciones"
                    }
                },
                 { $unwind: "$premioDeclaraciones" }
             ]
              )
              res.send(declaraciones) 
    } catch (e) {
        httpError(res,e)
    }
}

module.exports={
    getCategoriaLiteratura,
    getCategoriaQuimica,
    getCategoriaPaz,
    getDatos,
    getAño1901,
    getPremioM500k,
    getDeclaraciones
}