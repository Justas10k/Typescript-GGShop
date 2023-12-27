import { useState } from "react";

export const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
  };
};
