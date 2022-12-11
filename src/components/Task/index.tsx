import { Typography } from '@mui/material'
import { East, West } from '@mui/icons-material'

import { Container, Button } from './styles'

export const Task = () => {
  return (
    <Container>
      <Button variant="contained" color="error">
        <West fontSize="medium" />
      </Button>
      <Typography>Text</Typography>
      <Button variant="contained" color="success">
        <East fontSize="medium" />
      </Button>
    </Container>
  )
}
