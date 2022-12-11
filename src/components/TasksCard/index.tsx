import { Typography } from '@mui/material'
import { Task } from 'components/Task'
import { Container } from './styles'

export const TasksCard = () => {
  return (
    <Container>
      <Typography variant="h5">Title</Typography>
      <Task />
    </Container>
  )
}
