"use client";
import { useToggle, upperFirst } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Stack,
} from "@mantine/core";
import { GoogleButton } from "./GoogleButton";
import { signIn, signOut } from "next-auth/react";
import { NumericFormat } from "react-number-format";

export function Sair() {
  return <Button onClick={() => signOut()}>Logoff</Button>;
}

export default function AuthenticationForm(props: any) {
  const [type, toggle] = useToggle(["login", "cadastro"]);
  const form = useForm({
    initialValues: {
      username: "",
      name: "",
      cpf: "",
      fone: "",
      empresa: "",
      password: "",
      terms: true,
      fotografo: true,
    },

    validate: {
      username: (val) => (/^\S+@\S+$/.test(val) ? null : "Email inválido"),
      // password: (val) =>
      //   val.length <= 6
      //     ? "Password should include at least 6 characters"
      //     : null,
    },
  });

  const handleLogin = async (values: {
    username: string;
    password: string;
  }) => {
    const result = await signIn("credentials", {
      // Evita redirecionamento automático
      username: values.username,
      password: values.password,
    });

    if (result?.error) {
      console.error("Login failed:", result.error);
    } else {
      console.log("Login successful:", result);
      // Aqui você pode redirecionar o usuário manualmente, se necessário
    }
  };

  return (
    <Paper m="auto" maw="1024" radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}></Text>
      <Text size="lg" fw={500}>
        Bem vindo, faça o {type} com
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
      </Group>

      <Divider
        label="Ou com seu e-mail e senha"
        labelPosition="center"
        my="lg"
      />

      <form
        onSubmit={form.onSubmit((values) => {
          handleLogin(values);
        })}
      >
        <Stack>
          {type === "cadastro" && (
            <>
              <TextInput
                label="Nome"
                placeholder="Seu nome"
                value={form.values.name}
                onChange={(event) =>
                  form.setFieldValue("name", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                label="CPF"
                placeholder="Seu nome"
                value={form.values.cpf}
                onChange={(event) =>
                  form.setFieldValue("cpf", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                label="Telefone"
                placeholder="Seu nome"
                value={form.values.fone}
                onChange={(event) =>
                  form.setFieldValue("fone", event.currentTarget.value)
                }
                radius="md"
              />
              <TextInput
                label="Empresa"
                placeholder="Seu nome"
                value={form.values.empresa}
                onChange={(event) =>
                  form.setFieldValue("empresa", event.currentTarget.value)
                }
                radius="md"
              />
            </>
          )}

          <TextInput
            required
            label="Email"
            placeholder="seunome@email.com"
            value={form.values.username}
            onChange={(event) =>
              form.setFieldValue("username", event.currentTarget.value)
            }
            error={form.errors.username && "Invalid email"}
            radius="md"
          />

          <PasswordInput
            required
            label="Senha"
            placeholder="Sua senha"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={
              form.errors.password &&
              "A senha deverá ter pelo menos 6 caracteres!"
            }
            radius="md"
          />

          <Checkbox
            label="Sou Fotografo"
            checked={form.values.fotografo}
            onChange={(event) =>
              form.setFieldValue("fotografo", event.currentTarget.checked)
            }
          />

          {type === "cadastro" && (
            <Checkbox
              label="Eu aceito os termos e condições"
              checked={form.values.terms}
              onChange={(event) =>
                form.setFieldValue("terms", event.currentTarget.checked)
              }
            />
          )}
        </Stack>

        <Group justify="space-between" mt="xl">
          <Anchor
            component="button"
            type="button"
            c="dimmed"
            onClick={() => toggle()}
            size="xs"
          >
            {type === "cadastro"
              ? "Já tem uma conta? Faça o Login"
              : "Não tem uma conta? Cadastre-se"}
          </Anchor>
          <Button type="submit" radius="xl">
            {upperFirst(type)}
          </Button>
        </Group>
      </form>
    </Paper>
  );
}
