const mongoose = require("mongoose");
const empleadoModel = new mongoose.Schema(
    {       
        nombre:{
            type: String
        },
        apellido:{
            type: String
        },
        correo:{
            type: String
        },
        cedula:{
            type: String
        },
        tipo_cedula:{
            type: Number
        },
        fecha_nacimiento :{ 
            type: Date
        },
        ciudad : {
            type: String
        },
        departamento : {
            type: String
        }
    },
    {
        timestamps:true,
        versionkey:false,
    }
)

const ModelEmpleado = mongoose.model("empleados" , empleadoModel);
module.exports = ModelEmpleado;