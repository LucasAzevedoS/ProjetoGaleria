"use client";
import {
  Button,
  Card,
  Center,
  Checkbox,
  Group,
  Modal,
  NumberInput,
  SimpleGrid,
  TextInput,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { IconMoodPlus } from "@tabler/icons-react";
import ListaClientes from "./listaClientes";

export default function CadClient() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 50em)");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nome: "",
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        size="50%"
        onClose={close}
        title="Cadastro de Cliente"
        fullScreen={isMobile}
        transitionProps={{ transition: "fade", duration: 200 }}
      >
        {/* Modal content */}

        <CadClientForm />
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            withAsterisk
            label="Pesuisa cliente"
            key={form.key("nome")}
            {...form.getInputProps("nome")}
          />

          <ListaClientes />
          {isMobile && (
            <Button mt="20" variant="outline" onClick={close} fullWidth>
              Voltar
            </Button>
          )}
        </form>
      </Modal>
      <UnstyledButton onClick={open}>
        <Card shadow="sm" padding="lg" radius="xl" withBorder maw={200}>
          <IconMoodPlus size={40} />

          <Title size="25" fw={500} mt="40">
            Clientes
          </Title>
        </Card>
      </UnstyledButton>
    </>
  );
}

export function CadClientForm() {
  const icon = <IconMoodPlus size={25} />;
  const [opened, { open, close }] = useDisclosure(false);

  const isMobile = useMediaQuery("(max-width: 50em)");
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nome: "",
      id: "",
      documento: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });
  return (
    <>
      <Modal
        opened={opened}
        fullScreen={isMobile}
        onClose={close}
        title="Inserir CLiente"
      >
        {/* Modal content */}

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
            <NumberInput
              min={1}
              withAsterisk
              label="Fotos fechadas"
              placeholder="500"
              key={form.key("fotos")}
              {...form.getInputProps("fotos")}
            />

            <TextInput
              withAsterisk
              label="Password"
              placeholder="suasenhasegura@123"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />

            <TextInput
              withAsterisk
              label="Confirm Password"
              placeholder="suasenhasegura@123"
              key={form.key("password")}
              {...form.getInputProps("password")}
            />
          </SimpleGrid>

          <Checkbox
            mt="md"
            label="Cliente Ativo."
            key={form.key("termsOfService")}
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />
          <Group justify="flex-end" mt="md">
            <Button fullWidth type="submit">
              Cadastar
            </Button>
          </Group>
        </form>
        {isMobile && (
          <Button mt="20" variant="outline" onClick={close} fullWidth>
            Voltar
          </Button>
        )}
      </Modal>
      <Button
        mb="md"
        color="lime.9"
        variant="light"
        justify="center"
        onClick={open}
        fullWidth
        leftSection={icon}
      >
        Novo Cliente
      </Button>
    </>
  );
}
