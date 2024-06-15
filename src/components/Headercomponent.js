import React from 'react'
import {Button, Stack, Typography} from "@mui/material"
import { Link } from 'react-router-dom'

const Headercomponent = () => {
  return (
    <Stack direction='row' alignItems='center' spacing={3} padding={2} sx={{
      backgroundColor: 'whitesmoke'
    }}>
      <Typography variant='h4' style={{color:"aqua"}}><u>Cultivator</u></Typography>
      <Link to='/'>
        <Button>Home</Button>
      </Link>
      <Link to='/chat'>
        <Button>Crop Pridction</Button>
      </Link>
      <Link to='/resource'>
        <Button>Resource Management Tips</Button>
      </Link>
      {/* <Link to='/resource'>
        <Button>Community Forum</Button>
      </Link> */}
      <Link to='/weather'>
        <Button >Weather</Button>
      </Link>
    </Stack>
  )
}

export default Headercomponent
