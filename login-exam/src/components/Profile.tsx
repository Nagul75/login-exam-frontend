import { useState, useEffect } from "react";
import axios from "axios";

interface UserData {
  id: number;
  username: string;
  fullname: string;
  email: string;
  is_active: boolean;
  is_staff: boolean;
  created: string;
}

const Profile = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/check-auth/", { withCredentials: true })
      .then((res) => {
        if (res.data.authenticated) {
          setUserData(res.data.user);
        } else {
          setError("You are not authenticated.");
        }
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setError("Failed to fetch user data. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!userData) {
    return <div>You are not logged in.</div>;
  }

  return (
    <div>
      <h1>Welcome, {userData.fullname}</h1>
      <p>
        <strong>Username:</strong> {userData.username}
      </p>
      <p>
        <strong>Email:</strong> {userData.email}
      </p>
      <p>
        <strong>Account Created:</strong>{" "}
        {new Date(userData.created).toLocaleDateString()}
      </p>
      <p>
        <strong>Active:</strong> {userData.is_active ? "Yes" : "No"}
      </p>
      <p>
        <strong>Staff:</strong> {userData.is_staff ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default Profile;
