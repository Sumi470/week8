const mongoose = require('mongoose');

// MongoDB URI
const MONGO_URI = 'mongodb://127.0.0.1:27017/Week8';

// Connecting to MongoDB
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(`Connected to MongoDB at ${MONGO_URI}`);
  })
  .catch((err) => {
    console.error(`Error occurred during connection: ${err.message}`);
  });

// Define the schema
const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0, // Ensures age is not negative
    max: 150, // Optional realistic age limit
  },
  Gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'], // Restricts to specific values
    required: true,
  },
  Salary: {
    type: Number,
    required: true,
    min: 0, // Ensures salary is not negative
  },
});

// Create the model
const Person = mongoose.model('Person', PersonSchema, 'personCollection');

// Update query
Person.updateMany({ Gender: "Female" }, { Salary: 5555 })
  .exec()
  .then(docs => {
    console.log("Update successful");
    console.log(docs); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
