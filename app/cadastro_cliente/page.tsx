"use client";

import { Paper } from "@mantine/core";
import CadClient from "../areaFotografo/components/cadastroCliente";

export default function cadastro() {
  return (
    <Paper m="auto" px="10px" maw="1024">
      <h3>Cadastro Cliente</h3>
      <CadClient />
    </Paper>
  );
}
