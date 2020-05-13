import axios from "axios";

export default axios.create({
  baseURL:
    "https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyCXx4CYC_kuKFQAaWrNxGWus3gw9hNe1b8",
});
