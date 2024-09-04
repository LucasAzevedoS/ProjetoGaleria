"use client";
import {
  Button,
  Checkbox,
  Flex,
  Group,
  Select,
  SimpleGrid,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function CadFotografo() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      nome: "",
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  return (
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
          key={form.key("nome")}
          {...form.getInputProps("nome")}
        />
        <TextInput
          withAsterisk
          label="CPF ou CNPJ"
          placeholder="000.000.000-00"
          key={form.key("email")}
          {...form.getInputProps("email")}
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
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Select
          label="Plano"
          placeholder="Escolha um plano"
          data={["Bronze", "Prata", "Ouro", "Diamante"]}
        />

        <Checkbox
          mt="md"
          label="Declaro de li e concordo com as politicas do site."
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />
      </SimpleGrid>

      <Group justify="flex-end" mt="md">
        <Button type="submit">Cadastar</Button>
      </Group>
    </form>
  );
}
