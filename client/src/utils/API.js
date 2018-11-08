import axios from "axios";

export default {
  // Gets all books
  getAllUsers: function() {
    return axios.get("/api/user");
  },
  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a book to the database
  createUser: function(userData) {
    console.log("API page")
    console.log(userData)
    return axios.post("/api/user", userData);
  },


  // log routes
  // create new log
  createLog: function (logData){
    return axios.post("/api/logs", logData);
  },
// get all logs
  getAllLogs: function(){
    return axios.get ("/api/logs");
  },

};
