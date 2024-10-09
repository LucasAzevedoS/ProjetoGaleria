"use server";

import { Card, Center, Divider, SimpleGrid, Stack, Title } from "@mantine/core";
import CadClient from "./components/fotografo/cadastroCliente";
import CadFotografo from "./components/fotografo/cadastroFotografo";
import CadGaleria from "./components/fotografo/cadastroGaleria";
import { auth } from "@/auth";
import GaleriaCliente from "./components/cliente/galeriaCliente";

export default async function AreaFotografo() {
  const session = await auth();
  if (session?.user.nm_grupo === "Fotografo") {
    return (
      <>
        <Card m="auto" maw="1024">
          <Center>
            <Stack>
              <Title>Area Fotografo</Title>
            </Stack>
          </Center>
          <Divider m={10} />
          <SimpleGrid
            cols={{ base: 2, md: 4 }}
            spacing="lg"
            verticalSpacing="sm"
          >
            <CadClient />
            <CadFotografo />
            <CadGaleria />
          </SimpleGrid>
        </Card>
      </>
    );
  } else if (session?.user.nm_grupo === "cliente") {
    return (
      <>
        <Card m="auto" maw="1024">
          <Center>
            <Title>Area Cliente</Title>
          </Center>
          <Divider m={10} />
          <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
            <GaleriaCliente />
          </SimpleGrid>
        </Card>
      </>
    );
  }
}
