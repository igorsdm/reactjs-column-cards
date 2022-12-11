import { createContext, useMemo, useState, useCallback } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { TodoListContextType, TodoListType } from 'types'

type Props = {
  children: React.ReactNode
}

const initialStateList = [
  {
    title: 'To Do',
    items: [],
  },
  {
    title: 'In Progress',
    items: [],
  },
  {
    title: 'Done',
    items: [],
  },
]

const ToDoContext = createContext<TodoListContextType>(
  {} as TodoListContextType
)

const ToDoContextProvider = ({ children }: Props) => {
  const [toDoList, setToDoList] = useState<TodoListType[]>(() => {
    const storagedList = localStorage.getItem('@todolist')

    if (typeof storagedList === 'string') {
      return JSON.parse(storagedList)
    }

    return initialStateList
  })

  const addToDoList = useCallback(
    (newToDo: string) => {
      if (newToDo) {
        const newToDoList = [...toDoList]

        const newTask = {
          task: newToDo,
          id: uuidv4(),
        }

        newToDoList[0].items.push(newTask)

        setToDoList(newToDoList)
        localStorage.setItem('@todolist', JSON.stringify(newToDoList))
      }
    },
    [toDoList]
  )

  const changeTaskList = useCallback(
    (listIndex: number, taskId: string, positionToChange: string) => {
      const newToDoList = [...toDoList]

      const taskIndex = newToDoList[listIndex].items.findIndex(
        task => task.id === taskId
      )

      if (taskIndex >= 0) {
        const [taskToMove] = newToDoList[listIndex].items.splice(taskIndex, 1)

        if (positionToChange === 'up') {
          newToDoList[listIndex + 1].items.push(taskToMove)
        } else {
          newToDoList[listIndex - 1].items.push(taskToMove)
        }

        setToDoList(newToDoList)
        localStorage.setItem('@todolist', JSON.stringify(newToDoList))
      }
    },
    [toDoList]
  )

  const clearToDoList = useCallback(() => {
    setToDoList(initialStateList)
    localStorage.setItem('@todolist', JSON.stringify(initialStateList))
  }, [])

  const providerValueWrapper = useMemo(
    () => ({
      toDoList,
      addToDoList,
      changeTaskList,
      clearToDoList,
    }),
    [toDoList, addToDoList, changeTaskList, clearToDoList]
  )

  return (
    <ToDoContext.Provider value={providerValueWrapper}>
      {children}
    </ToDoContext.Provider>
  )
}

export { ToDoContext, ToDoContextProvider }
