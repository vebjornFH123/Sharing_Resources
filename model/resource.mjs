import DBManager from "../modules/storageManager.mjs";

class Resource {
  constructor() {
    this.id;
    this.name;
    this.description;
  }

  async save() {
    /// TODO: What happens if the DBManager fails to complete its task?
    // We know that if a user object dos not have the ID, then it cant be in the DB.
    if (this.id == null) {
      return await DBManager.create("Resources", this);
    } else {
      return await DBManager.updateUser(this);
    }
  }

  async delete() {
    /// TODO: What happens if the DBManager fails to complete its task?
    return await DBManager.deleteUser(this);
  }

  async getUser(key) {
    return await DBManager.getUser(key, this);
  }
}

export default Resource;
