import { useState, useEffect } from "react";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import axios from "axios";
import Header from "./ui/Header";
import Sidebar from "./ui/Sidebar";

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
    <>
      <div className="flex flex-col">
        <Header title="Generic Website" loggedIn={true}></Header>
        <div className="flex-1 flex mt-5 overflow-hidden">
          <Sidebar></Sidebar>
          <main className="flex-1 p-4 ml-90 mt-18">
            <Card className="p-6 shadow-lg rounded-lg bg-stone-900 text-white flex flex-col gap-1 w-2xl border-stone-800">
              <h2 className="text-3xl font-bold mb-4 text-center">Profile</h2>
              <div className="flex flex-row justify-start gap-4 mb-4">
                <Avatar className="w-14 h-14">
                  <AvatarFallback className="text-3xl text-black">
                    {userData.username.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-white text-4xl">
                  Welcome{" "}
                  <span className="text-fuchsia-600">{userData.fullname}!</span>
                </h1>
              </div>
              <div className="ml-18 border-l-stone-700 border-l-2 p-4">
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
            </Card>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
