// Dependencies
// =============================================================
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");
// Creates a "Chirp" model that matches up with DB

// var Chirp = sequelize.define("chirp", {
//   author: {
//     type: Sequelize.STRING
//   },
//   body: {
//     type: Sequelize.STRING
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });
// // Syncs with DB
// Chirp.sync();

// console.log(typeof Chirp);

// Chirp.methods.generateHash = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(9));
// }

// Chirp.methods.validPassword = function(password){
//   return bcrypt.compareSync(password, this.local.password);
// }

// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = Chirp;


module.exports = function(sequelize, DataTypes) {
    const User = sequelize.define('users', {
        annotation_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.DATE,
            field: 'first_name'
        },
        lastName: {
            type: DataTypes.DATE,
            field: 'last_name'
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });
    console.log("user consoled" + User)
    return User;
}