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
import { useDisclosure } from "@mantine/hooks";
import { IconMoodPlus } from "@tabler/icons-react";

export default function CadClient() {
  const [opened, { open, close }] = useDisclosure(false);
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
      <Modal opened={opened} onClose={close} title="Authentication">
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
        <Card bg="#5f2aa0" shadow="sm" padding="lg" radius="md" withBorder>
          <Center m="10">
            <ThemeIcon color="5f2aa0" size="xl">
              <IconMoodPlus size={80} />
            </ThemeIcon>
          </Center>

          <Center>
            <Title c="white" size="25" fw={500}>
              Cadastro Cliente
            </Title>
          </Center>
        </Card>
      </UnstyledButton>
    </>
  );
}
