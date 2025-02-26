import { Card, Group, Text } from '@mantine/core'
import React from 'react'
import { ColorSchemesSwitcher } from './color-shemes-switcher'
// import CustomThemeSwitcher from './CustomThemeSwitcher'

const Header = () => {
  return (
    <header>
      <Card p={"10"}
        shadow='lg'
        h={"60"}>
        <Group justify='space-between'>
          <Text
            ml={20}
            size="2rem"
            fw={900}
            variant="gradient"
            gradient={{ from: 'blue', to: 'violet', deg: 180 }}
          >
            NEWS HUB
          </Text>
          <ColorSchemesSwitcher />
          {/* <CustomThemeSwitcher /> */}
        </Group>
      </Card>
    </header>
  )
}

export default Header
