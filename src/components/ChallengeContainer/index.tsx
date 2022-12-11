import { useCallback, useState, useContext } from 'react'
import { Button, TextField } from '@mui/material'
import { Add } from '@mui/icons-material'

import { TasksCard } from 'components/TasksCard'

import { ToDoContext } from 'context/toDoList'
import { Container, TaskCardsContainer, AddTaskContainer } from './styles'

export const ChallengeContainer = () => {
  const [newTask, setNewTask] = useState('')

  const { toDoList, addToDoList, clearToDoList } = useContext(ToDoContext)

  const renderTaskCards = useCallback(
    () =>
      toDoList.map(list => (
        <TasksCard key={list.title} title={list.title} items={list.items} />
      )),

    [toDoList]
  )

  const handleAddToDo = useCallback(() => {
    addToDoList(newTask)
    setNewTask('')
  }, [addToDoList, newTask])

  const handleClearAll = useCallback(() => {
    clearToDoList()
  }, [clearToDoList])

  return (
    <Container>
      <TaskCardsContainer>{renderTaskCards()}</TaskCardsContainer>
      <AddTaskContainer>
        <TextField
          variant="outlined"
          placeholder="Add Task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddToDo}>
          <Add />
        </Button>
        <Button variant="contained" onClick={handleClearAll} color="error">
          Clear All
        </Button>
      </AddTaskContainer>
    </Container>
  )
}
