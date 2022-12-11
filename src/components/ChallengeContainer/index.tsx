import { Button, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'
import { TasksCard } from 'components/TasksCard'

import { Container, TaskCardsContainer, AddTaskContainer } from './styles'

export const ChallengeContainer = () => {
  return (
    <Container>
      <TaskCardsContainer>
        <TasksCard />
        <TasksCard />
        <TasksCard />
      </TaskCardsContainer>
      <AddTaskContainer>
        <TextField variant="outlined" placeholder="Add Task" />
        <Button variant="contained">
          <Add />
        </Button>
      </AddTaskContainer>
    </Container>
  )
}
