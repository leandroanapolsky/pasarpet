const { ObjectId } = require("mongodb");

let collection;

module.exports = class UsersDAO {
  static async injectDB(connection) {
    if (!connection) return;

    try {
      collection = await connection.collection("users");
    } catch (e) {
      console.log(`Couldn't establish connection tu users collection ${e}`);
    }
  }
  //aca va a meter las funciones para manipular data

  static async createUser(userData) {
    userData.created_at = new Date();
    userData.login_attempts = 0;
    await collection.insertOne({ ...userData });
  }

  static async getUserByUsername(username) {
    return await collection.findOne({ username });
  }

  static async getUserById(userId) {
    // console.log(await collection.findOne({ _id: new ObjectId(userId) }));
    // return await collection.findOne({ _id: userId });
    return await collection.findOne({ _id: new ObjectId(userId) });
  }

  static async updateUser(userData) {
    return await collection.updateOne(
      { username: userData.username },
      { $set: { userData } }
    );
  }

  static async showAllUsers(req) {
    return await collection.find().toArray();
  }

  static async editUser(req) {
    return await collection.updateOne(
      { _id: new ObjectId(req.params) },
      { $set: req.body }
    );
  }
};
