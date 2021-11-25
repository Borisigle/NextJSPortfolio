import Head from 'next/head'
import Image from 'next/image'
import {Box} from '@chakra-ui/react'
import Main from '../components/Main'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <Box >
      <Nav />
      <Main />
    </Box>
  )
} 
