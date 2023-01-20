const Teacher = require("./teacher.model");
const indexGet = async(req, res, next) => { 
   const teachers = await Teacher.find();
  return res.status(200).json(teachers);
};

const createPost = async (req, res, next) => {
  try {
    console.log(req.body);
    const teacherToBeCreated = new Teacher(req.body);
    const created = await teacherToBeCreated.save();
   
    return res.status(201).json(created);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

const editPut = async (req,res, next) => {
   try {
        const {id} = req.params;
      const fields = {...req.body};
      const options = {new:true};

      return Teacher.findByIdAndUpdate(id, fields, options);  
   } catch(error) {
    return res.status(error.status || 500).son(error.message)
   }
}

module.exports = {
  indexGet,
  createPost,
  editPut,
};
