const API = "https://localhost:7124/api/User";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export async function InserirUsuario(content: any) {
  const res = await fetch(API + "/insert-usuario", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return res;
}
// export async function InserirUsuario(content: any) {
//   const axios = require("axios");
//   console.log("content");
//   console.log(content);
//   try {
//     process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
//     const res = await axios.post(API + "/insert-usuario", content, {
//       httpsAgent: new (require("https").Agent)({
//         rejectUnauthorized: false,
//       }),
//     });
//     return;
//     const retorno = res;
//     console.log(retorno);
//   } catch {
//     return;
//     ("Falha na autenticação");
//   }
// }
