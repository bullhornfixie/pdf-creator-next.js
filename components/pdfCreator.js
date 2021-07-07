import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { colors, sizes, font } from '../styles/variables'

// Create styles
const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: `${colors.white}`,
    alignItems: 'center'
  },
  section: {
    alignItems: 'center',
    margin: 10,
    marginTop: 40,
    padding: 10,
    flex: 1,
  },
  body1: {
    fontSize: 14,
    marginBottom: 30,
    marginTop: 10,
  },
  body2: {
    fontSize: 32,
    marginBottom: 30,
    color: '#6236FF',
  },
  body3: {
    fontSize: 12,
    marginBottom: 30,
    // marginLeft: 140,
    // marginRight: 140,
    // textAlign: 'center'
  }
});

const name = 'Tamara-Drew'
const athlete = 'Battlestar CP3-0 Hockey Player'

// Create Document Component
const PDFDocument = () => {
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>.......................</Text>
        <Text style={styles.body1}>THIS IS TO CERTIFY THAT</Text>
        <Text style={styles.body2}>{name}</Text>
        <Text style={styles.body3}>Has successfully created an Interglatic Athlete in the pursuit of challenging planet X-R23's Dream Team.</Text>
        <Text>.......................</Text>
        <Text style={styles.body1}>CALLED</Text>
        <Text style={styles.body2}>{athlete}</Text>
        <Text style={styles.body3}>Your effort will now help Earth complete in the ultimate match.</Text>
        <Text style={styles.body3}>Sincerely, thank you.</Text>
      </View>   
    </Page>
  </Document>
  )
}

const Output = () => (
  <>
  <PDFViewer height='900vh' width='1200vh'>
     <PDFDocument />
  </PDFViewer>
</>
)

export default Output