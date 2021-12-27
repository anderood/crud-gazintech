const express = require('express');
const { uuid } =  require('uuidv4');

const app = express();
app.use(express.json());

const devs = [];

app.get('/dev', (request, response)=>{
    
    return response.json(devs);
});

app.post('/dev', (request, response)=>{
    const { name, ocupation } = request.body;

    const userDev = {id: uuid(), name, ocupation };

    devs.push(userDev);

    return response.json(userDev);
});

app.put('/dev/:id', (request, response)=>{

    const {id} = request.params;
    const {name, ocupation} = request.body;
    
    const position = devs.findIndex(item => item.id == id);

    const dev = { id,name, ocupation};

    devs[position] = dev;
    return response.json(dev);
});

app.delete('/dev/:id', (request, response)=>{
    const { id } = request.params;

    const position = devs.findIndex(item => item.id === id);
    devs.splice(position, 1);
    return response.status(204).send()
});



app.listen(3333, () => {
    console.log("Server Iniciado");
});