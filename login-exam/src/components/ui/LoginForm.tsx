import { Button } from "./button";
import { Input } from "./input";
import { Card } from "./card";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/login/", formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function goto() {
    navigate("/signup");
  }

  return (
    <>
      <div className="max-w-lg p-6">
        <Card className="p-6 shadow-lg rounded-lg bg-stone-900 text-white border-stone-600">
          <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-white"
              >
                Username
              </label>
              <Input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                className="mt-2 p-2 w-full border rounded-lg text-white"
                placeholder="Enter your username"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-2 p-2 w-full border rounded-lg"
                placeholder="Enter your password"
              />
            </div>

            <div className="mt-6 text-center">
              <Button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Login
              </Button>
            </div>
            <div className="mt-4 text-left text-white text-sm">
              <p className="inline text-sm">Don't have an account?</p>
              <Button
                variant="link"
                className="text-white text-sm"
                onClick={goto}
              >
                Sign-up
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
