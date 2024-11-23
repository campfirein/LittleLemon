import { useEffect, useState } from "react";

function UserCard () {
  const [user, setUser] = useState([]);

  const fetchData = () => {
    // Fetch data from the random user API
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json()) // Convert response to JSON
      .then((data) => {
        setUser(data); // Update the state with fetched data
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any potential errors
      });
  };

  useEffect(() => {
    fetchData(); // Fetch data on component mount
  }, []);

  return Object.keys(user).length > 0 ? (
    <div style={{ padding: "40px" }}>
      <h1>Customer data</h1>
      {/* Display customer name */}
      <h2>Name: {user.results[0].name.first}</h2>
      {/* Display customer image */}
      <img src={user.results[0].picture.large} alt="Customer" />
    </div>
  ) : (
    <h1>Data pending...</h1>
  );
};

export default UserCard;