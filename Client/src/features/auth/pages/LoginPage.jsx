import { login } from "../api/authApi";
import useAuthStore from "../../../app/store/authStore";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const setAuth = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    const data = await login(email, password);

    setAuth(data.user, data.token);

    navigate("/"); // go to dashboard
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" />
      <input name="password" type="password" />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;