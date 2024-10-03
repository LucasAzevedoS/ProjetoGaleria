"use client";
import {
  Button,
  Card,
  Checkbox,
  Flex,
  Group,
  Modal,
  Select,
  SimpleGrid,
  TextInput,
  UnstyledButton,
  Title,
  ThemeIcon,
  Center,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAppsFilled } from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";

export default function GaleriaCliente() {
  const [opened, { open, close }] = useDisclosure(false);
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nome: "",
      nomefantasia: "",
      documento: "",
      email: "",
      site: "",
      plano: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <SimpleGrid
            cols={{ base: 1, sm: 2, lg: 2 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
          >
            <TextInput
              withAsterisk
              label="Nome"
              key={form.key("nome")}
              {...form.getInputProps("nome")}
            />

            <TextInput
              withAsterisk
              label="Nome Fantasia"
              key={form.key("nomefantasia")}
              {...form.getInputProps("nomefantasia")}
            />
            <TextInput
              withAsterisk
              label="CPF ou CNPJ"
              placeholder="000.000.000-00"
              key={form.key("documento")}
              {...form.getInputProps("documento")}
            />
            <TextInput
              withAsterisk
              label="Email"
              placeholder="seu@email.com"
              key={form.key("email")}
              {...form.getInputProps("email")}
            />
            <TextInput
              withAsterisk
              label="Site"
              placeholder="Seu site"
              key={form.key("site")}
              {...form.getInputProps("site")}
            />

            <Flex direction={"column"}>
              <Select
                label="Plano"
                placeholder="Escolha um plano"
                data={["Bronze", "Prata", "Ouro", "Diamante"]}
                key={form.key("plano")}
                {...form.getInputProps("plano")}
              />
            </Flex>

            <Checkbox
              mt="md"
              label="Declaro de li e concordo com as politicas do site."
              key={form.key("termsOfService")}
              {...form.getInputProps("termsOfService", { type: "checkbox" })}
            />
          </SimpleGrid>
          <Group justify="flex-end" mt="md">
            <Button fullWidth type="submit">
              Cadastar
            </Button>
          </Group>
        </form>
      </Modal>
      <UnstyledButton onClick={open}>
        <Card bg="#5f2aa0" shadow="sm" padding="lg" radius="xl" withBorder>
          <Center m="10">
            <ThemeIcon color="5f2aa0" size="xl">
              <IconAppsFilled size={80} />
            </ThemeIcon>
          </Center>

          <Center>
            <Title c="white" size="25" fw={500}>
              Visualizar Galeria
            </Title>
          </Center>
        </Card>
      </UnstyledButton>
    </>
  );
}
