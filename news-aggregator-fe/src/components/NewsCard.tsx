import { Badge, Box, Button, Card, Group, Image, Text } from '@mantine/core'
import React from 'react'
import { NewsPropType } from './types';



const NewsCard = (props: NewsPropType) => {
  const { newsItem } = props ?? {};

  return (
    <Box>
      <Card shadow="sm"
        padding="sm"
        component="a"
        href={newsItem?.link}
        target="_blank"
      >
        <Card.Section>
          <Image
            src={newsItem?.image_url}
            height={160}
            alt="Featured Image"
          />

        </Card.Section>

        <Text fw={"unset"} size="lg" mt="md">
          {newsItem?.title}
        </Text>
      </Card>

    </Box>
  )
}

export default NewsCard
