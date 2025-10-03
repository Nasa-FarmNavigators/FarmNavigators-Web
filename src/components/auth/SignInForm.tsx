import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ChevronLeftIcon, EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../Admin/form/Label";
import Input from "../Admin/form/input/InputField";
import Button from "../Admin/ui/button/Button";

const apiUrl = import.meta.env.VITE_API_URL;

export default function SignInForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/login`, {
        emailOrPhone,
        password,
      });

      const { token, userId, role } = response.data;

      localStorage.setItem("token", token);
      localStorage.setItem("userType", role);
      localStorage.setItem("userId", userId);

      if (role === "ADMIN") {
        navigate("/admin");
      } else if (role === "INSTITUTION") {
        navigate("/institution");
      } else {
        setErrorMessage("Por favor, use o aplicativo mobile para acessar.");
        setShowModal(true);
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage(
        error?.response?.data?.error ||
          "Falha no login. Verifique suas credenciais e tente novamente."
      );
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col flex-1">
      {/* MODAL DE ERRO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="mb-2 text-lg font-semibold text-red-600">Erro</h2>
            <p className="text-sm text-gray-700">{errorMessage}</p>
            <div className="mt-4 text-right">
              <button
                className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
                onClick={() => setShowModal(false)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <ChevronLeftIcon className="size-5" />
          Voltar
        </Link>
      </div>

      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div>
          <div className="mb-5 sm:mb-8">
            <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
              Entrar
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Insira seu email ou telefone e sua senha para entrar!
            </p>
          </div>

          <form onSubmit={handleLogin}>
            <div className="space-y-6">
              <div>
                <Label>
                  Email ou Telefone: <span className="text-error-500">*</span>
                </Label>
                <Input
                  placeholder="example@gmail.com ou +244912345678"
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                />
              </div>

              <div>
                <Label>
                  Senha: <span className="text-error-500">*</span>
                </Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Insira a sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                  >
                    {showPassword ? (
                      <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    ) : (
                      <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                    )}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  to="/reset-password"
                  className="text-sm text-red-300 hover:text-red-500 dark:text-red-300"
                >
                  Esqueceu a senha?
                </Link>
              </div>

              <div>
                <Button className="w-full" size="sm" disabled={isLoading}>
                  {isLoading ? "Entrando..." : "Entrar"}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
