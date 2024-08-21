'use client'

import { TextInput } from '@mantine/core';

export default function Demo() {
  return (
    <TextInput
      size="md"
      radius="lg"
      label="Input label"
      withAsterisk
      description="Input description"
      placeholder="Input placeholder"
    />
  );
}