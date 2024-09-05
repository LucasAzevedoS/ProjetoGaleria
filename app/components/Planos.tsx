"use client";


import { Card, Image, Text, Badge, Button, Group, Flex } from '@mantine/core';

export default function Planos() {
  return (
<Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://static.vecteezy.com/ti/vetor-gratis/p1/2823135-champion-bronze-medal-with-red-ribbon-icon-sign-of-third-place-isolated-on-white-background-vector-illustration-gratis-vetor.jpg"
          height={500}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Plano Bronze</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        O plano bronze é o plano de entrada da nossa galeria, com ele voce pode armazenar até 200 fotos e ter acesso a 5 álbuns
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Adquira aqui!
      </Button>

      <Card.Section mt="1rem">
        <Image
          src="https://img.freepik.com/vetores-premium/medalha-de-prata-2-lugar-em-prata_87720-2497.jpg"
          height={500}
          alt="Norway"
        />
      </Card.Section >

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Plano Prata</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        O plano prata é ideal para voce que já tem um acervo maior de fotos, com ele voce pode armazenar até 500 fotos e ter acesso a 10 álbuns
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Adquira aqui!
      </Button>

      <Card.Section mt="1rem">
        <Image
          src="https://static.vecteezy.com/ti/vetor-gratis/p1/2762963-ouro-medalha-ouro-primeiro-lugar-emblema-esporte-jogo-premio-com-fita-vermelha-gratis-vetor.jpg"
          height={500}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Plano ouro</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        O plano ouro é ideal para voce que já tem um acervo maior de fotos, com ele voce pode armazenar até 1000 fotos e ter acesso a 20 álbuns
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Adquira aqui!
      </Button> 
    </Card>


  );
}