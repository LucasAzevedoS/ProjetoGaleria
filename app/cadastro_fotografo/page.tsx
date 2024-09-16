"use client";

import { Center, Paper } from "@mantine/core";
import CadFotografo from "../areaFotografo/components/cadastroFotografo";

export default function CadastroFotografo() {
  return (
    <>
      <Center>
        <Paper shadow="xl" radius="md" withBorder p="xl" m="auto">
          <Center mb="lg">
            <h1>Cadastro Fotografo</h1>
          </Center>
          <CadFotografo />
        </Paper>
      </Center>
    </>
  );
}
