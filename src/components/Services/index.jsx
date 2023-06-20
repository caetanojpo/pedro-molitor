import { Flex, Grid } from "@chakra-ui/react";
import ServicesCards from "../Cards/ServicesCards";


export default function Services() {
    const servicesData = [{
        title: "ASSESSORIA ODONTOLEGAL",
        items: [
            "Documentação",
            "Relação Profissional-paciente",
            "Montagem de Consultório",
            "Análise e Adequação de Documentação",
            "Análise e Adequação de Redes Sociais"
        ]
    },
    {
        title: "ASSISTENTE TÉCNICO JUDICIAL",
        items: [
            "Auxílio na Petição Inicial junto ao Advogado",
            "Formulaão dos Requisitos",
            "Acompanhamento do Exame Pericial",
            "Parecer Técnico",
            "Contestação do Laudo Pericial",
            "Quesitos Complementares"
        ]
    },
    {
        title: "RELATÓRIO DE VIABILIDADE PROCESUSAL",
        items: [
            "Avaliação do Caso",
            "Avaliação da Documentação",
            "Redação do Relatório",
            "Embasamento Científico",
        ]
    },
    {
        title: "",
        items: [

        ]
    },
    ]
    return (
        <Flex h='100vh' w='100%' justify='center' bg='brand.P1'>
            <Grid w='100%' gridTemplateColumns='1fr 1fr' gridTemplateRows='1fr 1fr' gap='40px' padding={{ base: '40px' }} alignItems='center' justifyItems='center'>
                {servicesData.map((service, index) => (
                    <ServicesCards key={index} title={service.title} lists={service.items} />
                ))}
            </Grid>
        </Flex>
    )
}
