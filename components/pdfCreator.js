import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import { colors, sizes, font } from '../styles/variables'
import Logo from '../public/certify.png'

console.log({Logo})

// Create styles
const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: `${colors.white}`,
    alignItems: 'center'
  },
  section: {
    margin: 10,
    paddingTop: 55,
    paddingBottom: 55,
    paddingHorizontal: 70,
    float: 'left',
    textAlign: 'center',
    borderRadius: 0,
    borderWidth: 1.5,
    borderColor: '#D7D8D6',
  },
  body1: {
    fontSize: 14,
    marginBottom: 30,
    marginTop: 10,
  },
  body2: {
    fontSize: 30,
    marginBottom: 30,
    color: '#6236FF',
  },
  body3: {
    fontSize: 12,
    marginBottom: 30,
    // marginLeft: 140,
    // marginRight: 140,
    // textAlign: 'center'
  },
  image: {
    marginBottom: 25,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 120,
    width: 120,
    display: 'block',
    backgroundColor: `${colors.black}`,
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
          <Text style={styles.body1}>THIS IS TO CERTIFY THAT</Text>
          <Text style={styles.body2}>{name}</Text>
          <Text style={styles.body3}>Has successfully created an Interglatic Athlete in the pursuit of challenging planet X-R23's Dream Team.</Text>
          <Text>.......................</Text>
          <Text style={styles.body1}>CALLED</Text>
          <Text style={styles.body2}>{athlete}</Text>
          <Text style={styles.body3}>Your effort will now help Earth complete in the ultimate match.</Text>
          <Text style={styles.body3}>Sincerely, thank you.</Text>
          <Image style={styles.image} cache={false} src={Logo}></Image>
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