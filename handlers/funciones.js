module.exports = {
    asegurar,
}

async function asegurar(schema, id, id2, objeto){
    const data = await schema.findOne({id: id2})
    if(!data){
        console.log("NO HABIA BASE DE DATOS CREADA, CREANDO UNA...")
        data = await new schema(objeto).then(data => data.save());
    }
    return data;
}