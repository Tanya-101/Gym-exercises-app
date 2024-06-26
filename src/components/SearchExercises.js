import React from 'react';
import { useEffect,useState } from 'react';
import {Box, Button, Stack, TextField, Typography} from '@mui/material';


const SearchExercises = () => {
  return (
    <Stack 
    alignItems="center" 
    mt="37px"
    justifyContent="center" 
    p="20px"
    >
      <Typography
      fontWeight={700}
      sx={{
        fontSize:{lg:'44px', xs:'30px'}
      }}
      mb="50px" 
      textAlign="center"
      >
        Awesome Exercises You <br/>
        Should know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input:{
              fontWeight:'700',
              border: 'none',
              borderRadius:'4px'
            },
            width:{lg : '1170px' , xs: '350px'},
            backgroundColor:'#fff',
            borderRadius:'40px'
          }}
          height="76px"
          value=""
          onChange={(e) => {}}
          placeholder='Search Exercises'
          type="text"
          />
          <Button className='search-btn'
            variant='contained' 
            color="error" 
            href="#exercises"
            sx={{
              backgroundColor:'#ff2625', padding:'10px',
              width:{lg: '175px',xs:'80px'},
              fontSize:{ lg: '20px', xs:'14px'},
              height:'56px',
              position: "absolute"
            }}
            ml="30px"
          >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises