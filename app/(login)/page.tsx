"use server";
import { auth } from "@/auth";
import AuthenticationForm, { Sair } from "../components/formLogin/formlogin";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return (
      <div>
        Você já está logado!{session.user?.name} s
        <Sair />
      </div>
    );
  }

  return (
    <div>
      <AuthenticationForm /> {/* Importa o componente de login */}
    </div>
  );
}
