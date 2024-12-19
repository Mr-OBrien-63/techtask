import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext"; // Import useTheme hook
import Button from "../components/Button";

const Login = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme(); // Access theme and toggle function
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className={`h-screen flex items-center justify-center ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
      <div className={`p-4 border rounded ${theme === "dark" ? "text-white" : "text-black"}`}>
        <h1 className="text-xl font-bold mb-4">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <Button text="Login" onClick={handleLogin} />
        <Button text="Toggle Theme" onClick={toggleTheme} style="mt-4" />
      </div>
    </div>
  );
};

export default Login;
