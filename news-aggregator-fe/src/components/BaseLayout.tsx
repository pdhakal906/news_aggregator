'use client';
import React from 'react'
import { AppShell, Burger, Group, Skeleton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Header from './Header';
import NewsGrid from './NewsGrid';
const BaseLayout = () => {


  return (
    <AppShell
      padding="md"
      layout='alt'
      header={{ height: 60 }}
    >
      <AppShell.Header p={12}>
        <Header />
      </AppShell.Header>
      <AppShell.Main><NewsGrid /></AppShell.Main>
    </AppShell>
  );
}

export default BaseLayout
