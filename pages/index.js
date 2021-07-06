import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Box, Flex, Text } from 'rebass'

const Home = () => { 
  return (
    <Flex
      width='100%'
      height='10vh'
      bg='black'
      justifyContent='center'
    > 
     <Text color='white' size='20px'>PDF Maker </Text>
    </Flex>
  )
}

export default Home 