const mongoose = require('mongoose');


// Creamos el esquema

const teacherSchema = new mongoose.Schema({
      name:{
        type:String,
        required:[true, 'Debes poner el nombre del profesor'],
      },
      speciality:{
        type:[String],
        enum: ['html', 'css', 'js', 'node', 'react', 'angular', 'php', 'mongo', 'sql', 'hhrr', 'rrhh'],

      },
      contactEmail:{
        type:String,
        required: true,
        
      },
      schedule:{
        type:String,
      },

      startingDate:{
        type: Date, //Unix format
        required: [true],
      }
      
}, {
      timestamps: true
});

// Exportamos el modelo, se suele poner en mayscula

const Teacher = mongoose.model('teachers', teacherSchema);

module.exports = Teacher;