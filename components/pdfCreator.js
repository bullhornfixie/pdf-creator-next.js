import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import { colors, sizes, font } from '../styles/variables'
import Signature from '../public/signature.png'
import Banner from '../public/banner.png'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: `${colors.white}`,
  },
  section: {
    margin: 10,
    paddingTop: 50,
    // paddingBottom: 10,
    paddingHorizontal: 10,
    float: 'left',
    textAlign: 'center',
    // borderRadius: 0,
    // borderWidth: 1.5,
    // borderColor: '#D7D8D6',
  },
  header: {
    fontSize: 14,
    marginBottom: 35,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 35,
    marginLeft: 140,
    marginRight: 140
  },
  name: {
    fontSize: 48,
    marginBottom: 35,
    color: '#6236FF',
  },
  athlete: {
    fontSize: 24,
    marginBottom: 35,
    color: '#6236FF',
  },
  text2: {
    fontSize: 12,
    marginBottom: 15,
  },
  text3: {
    fontSize: 12,
    marginBottom: 15,
  },
  image: {
    marginBottom: 35,
    height: 'auto',
    width: 'auto',

  },
  signature: {
    width: 120,
    height: 70,
  }
});

const name = 'Tamara-Drew'
const athlete = 'Battlestar CP3-0 Hockey Player'

// Create Document Component
const PDFDocument = ({image}) => {
  return (
    <Document> 
      <Page size="A4" style={styles.page}>
        <View style={styles.section} >
          <Text>.......................</Text>
          <Text style={styles.header}>THIS IS TO CERTIFY THAT</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.paragraph}>Has successfully created an Interglatic Athlete in the pursuit of challenging planet X-R23's Dream Team.</Text>
          <Text>.......................</Text>
          <Text style={styles.header}>CALLED</Text>
          <Text style={styles.athlete}>{athlete}</Text>
          <Text style={styles.text2}>Your effort will now help Earth complete in the ultimate match.</Text>
          <Text style={styles.text3}>Sincerely, thank you.</Text>
          <Image style={styles.signature} src={Signature.src} />
          <Text>..............................................................................................................</Text>
          <Image style={styles.image} src={Banner.src} />
        </View>   
      </Page>
    </Document>
  )
}

const Output = () => (
  <PDFViewer height='900vh' width='1200vh'>
     <PDFDocument image="http://static.donquijote.org/images/blogs/dq-reg/don-quijote-de-la-mancha.jpg" />
  </PDFViewer>
)

export default Output