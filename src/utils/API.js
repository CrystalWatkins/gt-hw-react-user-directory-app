import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomUser: function() {
    return axios.get("https://randomuser.me/api/?results=20");
  },
  getSortedList: function(breed) {
    return axios.get("//https://randomuser.me/api/?exc=" + this.results.name.first || this.results.name.last || this.results.email || 
    this.results.phone || this.results.picture.medium);
  },
  getFilteredList: function() {
    return axios.get("https://randomuser.me/api/?inc=" + this.results.name.first || this.results.name.last || this.results.email || 
    this.results.phone || this.results.picture.medium);
  }
};
