
import useUserData from "./hook"; // Import the custom hook
import "./Styles.css"; // External CSS for styles

const UserCard = () => {
  const { user, isLoading, error } = useUserData();

  if (isLoading) {
    return <h1>Data pending...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className="user-card">
      <h1>Customer data</h1>
      <h2>Name: {user?.results?.[0]?.name?.first ?? "N/A"}</h2>
      <img
        src={user?.results?.[0]?.picture?.large}
        alt="Customer"
        className="user-image"
      />
    </div>
  );
};

export default UserCard;