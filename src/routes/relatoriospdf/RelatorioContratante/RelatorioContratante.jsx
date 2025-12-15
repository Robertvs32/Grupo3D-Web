import './relatorioContratante.css'
import { Document, Page, Text, PDFViewer, Image, Font, View, StyleSheet} from '@react-pdf/renderer'
import { useState, memo, useEffect } from 'react';
import logo from '../../../assets/img/logoPreta.png';
import SoraRegular from '../../../assets/fonts/Sora-Regular.ttf';
import SoraBold from '../../../assets/fonts/Sora-Bold.ttf'
import useRelatorio from '../../../hooks/useRelatorio';
import { useParams } from 'react-router';

Font.register({
    family: 'Sora',
    fonts: [
        { 
            src: SoraRegular, 
            fontWeight: 'normal'
        },
        { 
            src: SoraBold, 
            fontWeight: 'bold'
        },
    ]
})

const Pdf = memo(({
        motorista, 
        job, 
        placa, 
        atribuicao, 
        setor,
        dateIni,
        dateFim,
        horasTrabalhadas,
        kmIni,
        kmFim,
        minutosTrabalhados,
        kmRodado
    }) => (
    <Document>
        <Page style={styles.page}>

            <Image
                src={logo}
                style={styles.logo}
            />

            <Text style={styles.titleRelatorio}>Relatorio de Viagem</Text>
            
            <View style={styles.infoRel}>
                <Text>Motorista:</Text>
                <Text style={styles.infoInput}>{motorista}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Job: </Text>
                <Text style={styles.infoInput}>{job}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Placa: </Text>
                <Text style={styles.infoInput}>{placa}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Atribuicao: </Text>
                <Text style={styles.infoInput}>{atribuicao}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Setor: </Text>
                <Text style={styles.infoInput}>{setor}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Inicio: </Text>
                <Text style={styles.infoInput}>{dateIni}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Fim: </Text>
                <Text style={styles.infoInput}>{dateFim}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Horas trabalhadas: </Text>
                <Text style={styles.infoInput}>

                    {horasTrabalhadas >= 1 && minutosTrabalhados != 0 && `${horasTrabalhadas} horas e ${minutosTrabalhados} minutos`}

                    {horasTrabalhadas >= 1 && minutosTrabalhados == 0 && `${horasTrabalhadas} horas`}
                    
                    {minutosTrabalhados != 0 && horasTrabalhadas < 1 && `${minutosTrabalhados} minutos`}
                    
                </Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Km Inicio: </Text>
                <Text style={styles.infoInput}>{kmIni}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Km Final: </Text>
                <Text style={styles.infoInput}>{kmFim}</Text>
            </View>

            <View style={styles.infoRel}>
                <Text>Km Rodado: </Text>
                <Text style={styles.infoInput}>{kmRodado}</Text>
            </View>

            <View style={styles.alimentacao}>
                <Text style={styles.bold}>Alimentacao</Text>

                <View style={styles.containerAlimentacao}>

                    <View style={styles.titlesAlimentacao}>
                        <View style={styles.cardAlimentacao1}>
                            <Text style={styles.bold}>Refeicao</Text>
                        </View>
                        
                        <View style={styles.cardAlimentacao}>
                            <Text style={styles.bold}>Valor</Text>
                        </View>
                    </View>

                    <View style={styles.titlesAlimentacao}>
                        <View style={styles.cardAlimentacao1}>
                            <Text>Almoco</Text>
                        </View>
                        
                        <View style={styles.cardAlimentacao}>
                            <Text>{`R$ 55,90`}</Text>
                        </View>
                    </View>

                    <View style={styles.titlesAlimentacao}>
                        <View style={styles.cardAlimentacao1}>
                            <Text>Janta</Text>
                        </View>
                        
                        <View style={styles.cardAlimentacao}>
                            <Text>{`R$ 32,90`}</Text>
                        </View>
                    </View>
                    
                </View>

            </View>

        </Page>
    </Document>
));

export default function RelatorioContratante(){

    const { buscaRelatorio, relatorioGetters } = useRelatorio();

    const { id } = useParams();

    useEffect(() => {
        buscaRelatorio(id);
    })

    function minutosTrabalhados(horas){
        const intHoras = parseInt(horas);
        const minutos = (horas - intHoras) * 60;

        return minutos.toFixed(0);
    }

    function horasTrabalhadas(horas){
        let horasTrabalhadas = horas;
        horasTrabalhadas = parseInt(horasTrabalhadas);

        return horasTrabalhadas;
    }

    function kmTotal(kmIni, kmFim){
        const total = kmFim - kmIni;
        return total;
    }

    return(
        <div id="containerRelatorioContratante">
            <h1 id="titleRelatorioContratante">Relatorio Contratante</h1>
            <PDFViewer style={{width: '100%', height: "700px"}}>
                <Pdf
                    motorista={relatorioGetters.motorista}
                    job={relatorioGetters.job}
                    placa={relatorioGetters.placa}
                    atribuicao={relatorioGetters.atribuicao == 'Outros' ? relatorioGetters.outrosAtribuicao: relatorioGetters.atribuicao}
                    setor={relatorioGetters.setor}
                    dateIni={relatorioGetters.dateTimeIni.toLocaleString('pt-Br', {
                        dateStyle: 'short', timeStyle: 'short'}
                    )}
                    dateFim={
                        relatorioGetters.dateTimeFim.toLocaleString('pt-Br', {
                            dateStyle: 'short', timeStyle: 'short'
                        })
                    }
                    horasTrabalhadas={horasTrabalhadas(relatorioGetters.horasTrabalhadas)}
                    minutosTrabalhados={minutosTrabalhados(relatorioGetters.horasTrabalhadas)}
                    kmIni={relatorioGetters.kmIni}
                    kmFim={relatorioGetters.kmFim}
                    kmRodado={kmTotal(relatorioGetters.kmIni, relatorioGetters.kmFim)}
                    
                />
            </PDFViewer>
        </div>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: '45px', 
    },
    titleRelatorio: {
        fontFamily: 'Sora', 
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '40px',
        fontSize: '26px',
    },
    logo: {
        width: '105px',
        position: 'absolute',
        right: '40'
    },
    infoRel: {
        flexDirection: 'row', 
        borderBottom: '1px solid black', 
        paddingBottom: '3px',
        marginTop: '15px',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    infoInput: {
        marginLeft: '5px',
        paddingBottom: '4px',
        fontWeight: 'normal'
    },
    alimentacao: {
        marginTop: '15px',
        fontSize: '12px',
    },
    containerAlimentacao: {
        width: '200px',
        border: '1px solid black',
        borderRadius: '3px',
        marginTop: '5px'
    },
    titlesAlimentacao: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '1px solid black',
    }, 
    cardAlimentacao1: {
        color: 'black',
        flex: '1',
        textAlign: 'center',
        borderRight: '1px solid black',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: '5px'
    },
    cardAlimentacao: {
        color: 'black',
        flex: '1',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        margin: '5px'
    },
    bold: {
        fontWeight: 'bold'
    }
})