import { useCallback } from 'react'
import { Typography } from '@mui/material'

import { Task } from 'components/Task'
import { TaskType } from 'types'

import { Container } from './styles'

type Props = {
  title: string
  items: TaskType[]
}

export const TasksCard = ({ title, items }: Props) => {
  const renderTask = useCallback(
    () =>
      items.map(item => <Task item={item} key={item.id} listTitle={title} />),
    [items, title]
  )

  return (
    <Container>
      <Typography variant="h5">{title}</Typography>
      {renderTask()}
    </Container>
  )
}
