import { Box, styled } from '@mui/material'

export const Container = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding: '40px',
  width: '100%',
})

export const TaskCardsContainer = styled(Box)({
  display: 'flex',
  marginBottom: '30px',
  '&>div': { marginRight: '30px' },
})

export const AddTaskContainer = styled(Box)({
  flex: 0,
  button: { marginLeft: '20px', height: '50px' },
  input: { height: '50px' },
})
