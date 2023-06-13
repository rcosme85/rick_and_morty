const users = require('../utils/users')

const login = (req, res) => {
  const { email, password } = req.query;
  let access = false;
   /* const userFound = users.find((user) => {
    user.email === email && user.password === password
  })
  if (userFound) return res.status(200).json({ access: true })
  return res.status(404).json({ access: false });  */

   users.forEach(user => {
    user.email === email && user.password === password
      ? access = true
      : null
  })
  return res.status(200).json({ access }) 
  


 /*  const usuariosFound = users.find((usuario) => {
    usuario.email === email && usuario.password===password    
  })
    if (usuariosFound)
      return res.status(200).json({ acces: true })
    return res.status(400).json({access: false}) */
  
}

module.exports=login