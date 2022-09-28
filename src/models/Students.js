const mongoose = require('mongoose')

const StudentsSchema = new mongoose.Schema({
   
    //! buscar como agregar documentos pdf y word

    //! buscar como referiar a la coleccion Users:

    status:{
        type: String,
        required: true
    },

    cousers:[{},{}]
})

module.exports = Students = mongoose.model('students', StudentsSchema)