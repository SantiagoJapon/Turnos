const express = require("express");
const router = express.Router();
const usuarioSchema = require("../models/user");

//crear cita
router.post('/users',(req,res)=>{
    const user = usuarioSchema(req.body);
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});
module.exports = router;