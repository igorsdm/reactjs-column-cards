import { Card, styled } from '@mui/material'

export const Container = styled(Card)({
  width: '100%',
  minHeight: '400px',
  maxWidth: '300px',
  boxShadow: '0px 0px 4px 2px rgba(0,0,0,0.26)',
  padding: '15px',

  h5: {
    textAlign: 'center',
    marginBottom: '10px',
  },
})
