import { useState } from "react";
import { useNavigate } from "react-router";

function LogIn() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!userName || !password) {
      alert("Please fill in all fields!");
      return;
    }

    console.log(userName, password);
    navigate("/Welcome");
  }

  return (
    <section className="py-6">
      <div className="container mx-auto px-5 flex justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-screen md:w-[50%] mx-auto md:mt-20">
          <label className="font-semibold text-lg" htmlFor="userName">
            Username
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            className="w-full mb-2 bg-gray-900 border border-[#d851d4] outline-none rounded-full p-2"
            type="text"
            id="userName"
            placeholder="Please Enter Username"
            required
            autoFocus
          />
          <label className="font-semibold text-lg" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 bg-gray-900 border border-[#d851d4] outline-none rounded-full p-2"
            type="password"
            id="password"
            placeholder="Please Enter Password"
            required
          />
          <button className="bg-[#d851d4] rounded-full p-2 font-semibold hover:bg-[#c449c0] text-lg block border-none" type="submit">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LogIn;
