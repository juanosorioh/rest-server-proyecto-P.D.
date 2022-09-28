const ctrlUser = {};
ctrlUser.getUsers = (req, res) => {
  return res.json({
    msg: "GET",
  });
};
ctrlUser.postUsers = (req, res) => {
  return res.json({
    msg: "postre",
  });
};
ctrlUser.putUsers = (req, res) => {
  return res.json({
    msg: "put",
  });
};
ctrlUser.deleteUsers = (req, res) => {
  return res.json({
    msg: "borrado",
  });
};

module.exports = ctrlUser;
