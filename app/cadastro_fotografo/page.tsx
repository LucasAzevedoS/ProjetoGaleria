"use client";

import { Center } from "@mantine/core";
import CadFotografo from "../components/cadastroFotografo";

export default function CadastroFotografo() {
  return (
    <>
      <Center>
        <h1>Cadastro Fotografo</h1>
      </Center>
      <Center>
        <CadFotografo />
      </Center>
    </>
  );
}
