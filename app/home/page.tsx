"use server";

import { Card, Center, Divider, SimpleGrid, Title } from "@mantine/core";
import CadClient from "./components/fotografo/cadastroCliente";
import CadFotografo from "./components/fotografo/cadastroFotografo";
import CadGaleria from "./components/fotografo/cadastroGaleria";
import { auth } from "@/auth";
import GaleriaCliente from "./components/cliente/galeriaCliente";
import { Sair } from "../components/formLogin/formlogin";
import AvatarLogin from "../components/header/avatar";

export default async function AreaFotografo() {
  const session = await auth();
  if (session?.user.perfil === "fotografo") {
    return (
      <>
        <Card m="auto" maw="1024">
          <Center>
            <Title>Area Fotografo</Title>
          </Center>
          <Divider />
          <Sair></Sair>
          <Divider m={10} />
          <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <CadClient />
            <CadFotografo />
            <CadGaleria />
          </SimpleGrid>
        </Card>
      </>
    );
  } else if (session?.user.perfil === "cliente") {
    return (
      <>
        <Card m="auto" maw="1024">
          <Center>
            <Title>Area Cliente</Title>
          </Center>
          <Divider />
          <Sair></Sair>
          <Divider m={10} />
          <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <GaleriaCliente />
          </SimpleGrid>
        </Card>
      </>
    );
  }
}
