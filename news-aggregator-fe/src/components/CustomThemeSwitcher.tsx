'use client';
import { Switch } from '@mantine/core'
import React, { useState } from 'react'

const CustomThemeSwitcher = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
    />
  );
}

export default CustomThemeSwitcher
