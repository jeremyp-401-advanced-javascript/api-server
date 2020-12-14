// This allows us to use RESTful verbs with Mongoose

const DrinkModel = require('./DrinkModel'); // I think I'd make a good drink model.

class DrinkCollection { // a.k.a. "Bar" || "That Place That Everybody Knows Your Name". We use shorthand.

  constructor(){
    this.model = DrinkModel; // Oh, so *that's* how you get that job. No judgements.
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

  update(_id, record) { // update is our verb
    let newRecord = this.model(record);
    return newRecord.findOneAndUpdate(_id, record); // findOneAndUpdate is Mongoose's verb, and is waaaaay better.
  }

  delete(_id) { // delete is our verb
    return this.model.deleteOne(_id); // deleteOne is Mongoose's verb
  }
}

module.export = DrinkCollection;

