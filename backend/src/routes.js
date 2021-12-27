const express = require('express');
const { uuid } =  require('uuidv4');

const routes = express.Router();

const devs = [];

routes.get('/dev', (request, response)=>{
    
    return response.json(devs);
});

routes.post('/dev', (request, response)=>{
    const { name, ocupation } = request.body;

    const userDev = {id: uuid(), name, ocupation };

    devs.push(userDev);

    return response.json(userDev);
});

routes.put('/dev/:id', (request, response)=>{

    const {id} = request.params;
    const {name, ocupation} = request.body;
    
    const position = devs.findIndex(item => item.id == id);

    const dev = { id,name, ocupation};

    devs[position] = dev;
    return response.json(dev);
});

routes.delete('/dev/:id', (request, response)=>{
    const { id } = request.params;

    const position = devs.findIndex(item => item.id === id);
    devs.splice(position, 1);
    return response.status(204).send()
});

module.exports = routes;