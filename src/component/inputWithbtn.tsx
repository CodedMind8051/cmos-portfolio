import { IconArrowRight, IconSearch } from '@tabler/icons-react';
import { ActionIcon, TextInput, type TextInputProps, useMantineTheme } from '@mantine/core';

export function InputWithButton(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
    className='mb-5 mt-5 w-[40%]'
      radius="xl"
      size="md"
      placeholder="Search Applications"
      rightSectionWidth={42}
      leftSection={<IconSearch size={18} stroke={1.5} />}
      rightSection={
        <ActionIcon size={32} radius="xl" color={theme.primaryColor} variant="filled">
          <IconArrowRight size={18} stroke={1.5} />
        </ActionIcon>
      }
      {...props}
    />
  );
}