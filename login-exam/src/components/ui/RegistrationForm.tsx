import { Button} from "./button";
import { Input } from "./input";
import { Card } from "./card";
import { useState } from "react";

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        username: '',
        password: '',
    })

    const handleChange = (e:any) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log('Form submitted', formData)
    }

    return(
        <>
            <div className="max-w-lg p-6">
      <Card className="p-6 shadow-lg rounded-lg bg-stone-900 text-white border-stone-600">
        <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-sm font-medium text-white">Full Name</label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-2 p-2 w-full border rounded-lg text-white"
              placeholder="Enter your full name"
            />

          </div>

          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-white">Username</label>
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
            <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 p-2 w-full border rounded-lg"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
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
            <Button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Register
            </Button>
          </div>
        </form>
      </Card>
    </div>
        </>
    )
}

export default RegistrationForm