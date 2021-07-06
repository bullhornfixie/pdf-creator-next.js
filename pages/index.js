import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import ReactPDF, { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import PDFLink from '../components/pdfCreator'
import Flex from 'rebass'
import { PDFViewer } from '@react-pdf/renderer'
import MyDocument from '../components/pdfCreator'
import { useEffect } from 'react';
import MyApp from './App'
import dynamic from 'next/dynamic'
const pdfDocument = dynamic(() => import('../components/pdfCreator'), {
  ssr: false,
})

// ssr means server side rendering - you want this component rendering client side 

const Home = () => (
  <pdfDocument height="900vh"> 
    <MyDocument />
  </pdfDocument>

)

export default Home
