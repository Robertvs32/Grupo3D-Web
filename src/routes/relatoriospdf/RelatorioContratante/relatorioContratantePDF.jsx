import './relatorioContratantePDF.css';
import { Document, Page, Text, Image, StyleSheet, Font} from '@react-pdf/renderer'
import logo from '../../../assets/img/logoPreta.png';
import Sora from '../../../assets/fonts/Sora-Regular.ttf'
import SoraBold from '../../../assets/fonts/Sora-Bold.ttf'

export default function RelatorioContratantePDF({arrayRelatorios}){


Font.register({
    family: 'Sora',
    fonts: [
        { src: Sora },
        { src: SoraBold, fontWeight: 'bold' }
    ]
})

    return(
            <Document>
                <Page size="A4" orientation="landscape" style={styles.page}>
                    <Image
                        src={logo}
                        style={styles.logoImg}
                    />

                    <Text style={styles.title}>Relatorio contratante</Text>
                    {arrayRelatorios.map((item) => (
                        <Text>OLa</Text>
                    ))}
                    
                </Page>
            </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: '30',
        position: 'relative',
        fontFamily: 'Sora'
    },
    title: {
        fontWeight: 'bold',
        fontSize: '25'
    },  
    logoImg: {
        width: '90',
        position: 'absolute',
        right: '20',
        top: '20'
    }
})