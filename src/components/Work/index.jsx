import { Flex, Grid } from "@chakra-ui/react";
import ServicesCards from "../Cards/ServicesCards";


export default function Work() {
    const servicesData = [{
        title: "CONSULTORIA ODONTOLEGAL",
        items: [
            "Análise e Adequação de Documentos Odontológicos",
            "Análise e Adequação de Redes Sociais",
            "Elaboração de TCLE'S"
        ]
    },
    {
        title: "ASSISTÊNCIA TÉCNICO JUDICIÁRIA",
        items: [
            "Auxílio na Primeira Etapa Processual",
            "Elaboração dos Quesitos",
            "Acompanhamento do Exame Pericial",
            "Quesitos Suplementares",
            "Parecer Técnico",
            "Contestação do Laudo",
            "Quesitos Complementares"
        ]
    },
    {
        title: "RELATÓRIO DE VIABILIDADE PROCESUSAL",
        items: [
            "Avaliação Presencial",
            "Avaliação da Documentação",
            "Elaboração do Relatório",
        ]
    },
    {
        title: "MENTORIA",
        items: [
            "Acompanhamento Mensal (on-line ou presencial) para Esclarecimento de Dúvidas",
            "Criação e Implementação de Rotina na Clínica/Consultório",
            "Análise do Processo de Preenchimento das Fichas",
            "Treinamento de Equipe Visando Manter o Padrão de Atendimento",
            "Uso da Documentação"
        ]
    },
    ]
    return (
        <Flex id='services' h='100vh' w='100%' justify='center' bg='brand.P1'>
            <Grid w='100%' gridTemplateColumns='1fr 1fr' gridTemplateRows='1fr 1fr' gap='40px' padding={{ base: '40px' }} alignItems='center' justifyItems='center'>
                {servicesData.map((service, index) => (
                    <ServicesCards key={index} title={service.title} lists={service.items} />
                ))}
            </Grid>
        </Flex>
    )
}
