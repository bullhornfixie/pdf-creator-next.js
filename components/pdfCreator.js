import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { PDFDownloadLink, PDFViewer} from '@react-pdf/renderer';
import { colors, sizes, font } from '../styles/variables'
import Signature from '../public/signature.png'
import Banner from '../public/banner.png'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: `${colors.white}`,
  },
  section: {
    margin: 15,
    paddingTop: 50,
    // paddingBottom: 50,
    paddingHorizontal: 10,
    textAlign: 'center',
    borderRadius: 0,
    borderWidth: 1.5,
    borderColor: '#D7D8D6',
  },
  header: {
    fontSize: `${sizes.sm}`,
    textTransform: 'uppercase',
    marginBottom: `${sizes.lg}`,
    marginTop: `${sizes.sm}`,
  },
  name: {
    fontSize: `${sizes.xxl}`,
    marginBottom: `${sizes.lg}`,
    color: '#6236FF',
  },
  athlete: {
    fontSize: 24,
    marginBottom: `${sizes.lg}`,
    color: '#6236FF',
  },
  text1: {
    fontSize: `${sizes.xs}`,
    marginBottom: `${sizes.lg}`,
    lineHeight: 1.5,
    marginLeft: 135,
    marginRight: 135,
  },
  text2: {
    fontSize: `${sizes.xs}`,
    marginBottom: `${sizes.md}`,
  },
  text3: {
    fontSize: `${sizes.xs}`,
    marginBottom: `${sizes.md}`,
  },
  text4: {
    fontSize: `${sizes.sm}`,
    lineHeight: 1.5,
    marginBottom: `${sizes.sm}`
  },
  text5: {
    fontSize: `${sizes.xs}`,
    lineHeight: 1.5,
  },
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: `${sizes.md}`,
    marginTop: `${sizes.md}`,
    paddingLeft: 50,
    paddingRight: 50,
    minHeight: 100,
  },
    leftColumn: {
      flexDirection: 'column',
      width: '50%',
      paddingLeft: 25,
    },
    rightColumn: {
      flexDirection: 'column',
      width: '50%',
      paddingRight: 25,
      textAlign: 'left',
    },
  banner: {
    marginBottom: `${sizes.lg}`,
    height: 'auto',
    width: 'auto',
  },
  signature: {
    width: 150,
    height: 100,
  }
});

const name = 'Tamara-Drew'
const athlete = 'Battlestar CP3-0 Hockey Player'

const PDFDocument = ({image}) => {
  return (
    <Document> 
      <Page size="A4" style={styles.page}>
        <View style={styles.section} >
          <Text>.......................</Text>
          <Text style={styles.header}>This is to certify that</Text>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.text1}>Has successfully created an Interglatic Athlete in the pursuit of challenging planet X-R23's Dream Team.</Text>
          <Text>.......................</Text>
          <Text style={styles.header}>Called</Text>
          <Text style={styles.athlete}>{athlete}</Text>
          <Text style={styles.text2}>Your effort will now help Earth complete in the ultimate match.</Text>
          <Text style={styles.text3}>Sincerely, thank you.</Text>
          <View style={styles.container}>
            <View style={styles.leftColumn}>
              <Image style={styles.signature} src={Signature.src} />
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.text4}>CX-O Director General {"\n"} Space Sports Pursuits Division </Text>  
              <Text style={styles.text5}>Intergalatic.Athletes {"\n"} United.Interplanetary.Federation </Text>
            </View>
          </View>
          <Text>..............................................................................................................</Text>
          <Image style={styles.banner} src={Banner.src} />
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