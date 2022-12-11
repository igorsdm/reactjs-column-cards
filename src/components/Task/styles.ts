import { Card, Button as MuiButton, styled } from '@mui/material'

export const Container = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  boxShadow: '0px 2px 3px 0px rgba(0,0,0,0.35)',
  padding: '10px',
})

export const Button = styled(MuiButton)({
  width: '45px',
  minWidth: 0,
  height: '100%',
})
