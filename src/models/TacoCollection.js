// This allows us to use RESTful verbs with Mongoose

const TacoModel = require('./TacoModel'); // They're all beautiful just the way they are.

class TacoCollection {

  constructor(){
    this.model = TacoModel; // Any model could be if they had their priorities straight (and a good booking agent).
  }

  get(_id) { // get is our verb
    if(_id) {
      return this.model.findOne({_id}); // findOne is Mongoose's verb
    } else {
      return this.model.find({}); // find is Mongoose's verb
    }
  }

  create(record) { // create is our verb
    let newRecord = new this.model(record); // Make a new instance of TacoModel using the returned record
    return newRecord.save(); // this is Mongoose's verb
  }

  update(_id, record) {
    let newRecord = this.model(record);
    return newRecord.findOneAndUpdate(_id, record);
  }

  delete(_id) { // delete is our verb
    return this.model.deleteOne(_id); // deleteOne is Mongoose's verb
  }

}

module.export = TacoCollection;

