import { useContext, useCallback, useMemo } from 'react'
import { Typography } from '@mui/material'
import { East, West } from '@mui/icons-material'

import { ToDoContext } from 'context/toDoList'
import { TaskType } from 'types'

import { Container, Button } from './styles'

type Props = {
  item: TaskType
  listTitle: string
}

export const Task = ({ item, listTitle }: Props) => {
  const { toDoList, changeTaskList } = useContext(ToDoContext)

  const listIndex = useMemo(
    () => toDoList.findIndex(list => list.title === listTitle),
    [listTitle, toDoList]
  )

  const handleChangePosition = useCallback(
    (direction: string) => {
      changeTaskList(listIndex, item.id, direction)
    },
    [changeTaskList, item.id, listIndex]
  )

  return (
    <Container>
      <Button
        variant="contained"
        color="error"
        disabled={listIndex === 0}
        onClick={() => handleChangePosition('down')}
      >
        <West fontSize="medium" />
      </Button>
      <Typography>{item.task}</Typography>
      <Button
        variant="contained"
        color="success"
        disabled={listIndex === toDoList.length - 1}
        onClick={() => handleChangePosition('up')}
      >
        <East fontSize="medium" />
      </Button>
    </Container>
  )
}
