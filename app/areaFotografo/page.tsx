"use server";

import {
  Card,
  CardSection,
  Center,
  Divider,
  SimpleGrid,
  Title,
} from "@mantine/core";
import { auth } from "@/auth";
import CadClient from "./components/cadastroCliente";
import CadFotografo from "./components/cadastroFotografo";
import CadGaleria from "./components/cadastroGaleria";

export default async function AreaFotografo() {
  const session = await auth();
  return (
    <>
      <Card m="auto" maw="1024">
        <Center>
          <Title>Olá {session?.user?.name}</Title>
        </Center>
        <Divider m={10} />
        <SimpleGrid cols={2} spacing="lg" verticalSpacing="sm">
          <CadClient />
          <CadFotografo />
          <CadGaleria />
        </SimpleGrid>
      </Card>
    </>
  );
}
