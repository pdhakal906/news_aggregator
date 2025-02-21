import { Text } from '@mantine/core'
import React from 'react'

const Header = () => {
  return (
    <header>
      <Text
        size="2rem"
        fw={900}
        variant="gradient"
        gradient={{ from: 'blue', to: 'violet', deg: 180 }}
      >
        NEWS HUB
      </Text>
    </header>
  )
}

export default Header
