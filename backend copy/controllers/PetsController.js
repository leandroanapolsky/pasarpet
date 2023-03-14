const { editPet } = require("../models/PetsDAO");
const PetsDAO = require("../models/PetsDAO");

module.exports = class PetsController {
  static async Search(req, res) {
    try {
      const petsArray = await PetsDAO.getPetBySearch(req.query.type);
      console.log("resultados del controller", petsArray);
      return res.send(petsArray);
    } catch (e) {
      console.log("the search failed in pets controller");
    }
  }

  static async SearchOne(req, res) {
    try {
      const petFound = await PetsDAO.getPetByID(req.params);
      console.log("pet found", petFound);
      return res.send(petFound);
    } catch (e) {
      console.log("the search failed in pets controller search one");
    }
  }
  static async EditPet(req, res) {
    try {
      const editPet = await PetsDAO.editPet(req);
      return res.send(editPet);
    } catch (error) {
      console.log(error);
    }
  }

  static async PostNewPet(req, res) {
    try {
      console.log("postMewPet controller");

      await PetsDAO.postNewPet(req.body);
      return res.json(req.body);
    } catch (e) {
      console.log("error en el pet controller del posteo", e);
    }
  }
};
