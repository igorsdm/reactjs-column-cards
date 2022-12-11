export type TaskType = {
  task: string
  id: string
}

export type TodoListType = {
  title: string
  items: TaskType[]
}

export type TodoListContextType = {
  toDoList: TodoListType[]
  addToDoList: (newToDo: string) => void
  changeTaskList: (
    listIndex: number,
    taskId: string,
    positionToChange: string
  ) => void
  clearToDoList: () => void
}
