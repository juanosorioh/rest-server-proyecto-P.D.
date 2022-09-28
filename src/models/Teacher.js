const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    
    //! buscar como refernciar a la coleccion "Users"
    
   Courses: [{},{}]
})

module.exports = Teacher = mongoose.model('teacher', TeacherSchema)