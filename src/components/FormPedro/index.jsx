import { Button, Flex, Heading, Image, Input, Textarea } from "@chakra-ui/react";
import logo from './Logo Pedro - lupa.png'

export default function FormPedro() {
    return (
        <Flex id='forms' h='100vh' bg='brand.P1' padding='50px'>
            <Flex borderRadius='8px' h='100%' w='100%' bg='white' >
                <form style={{ width: '100%', height: '100%' }}>
                    <Flex w='100%' h='20%' align='center' justify='space-between' padding='10px 40px'>
                        <Heading>ENTRE EM CONTATO</Heading>
                        <Image w='140px' src={logo} alt="Logo da marca Pedro Molitor" />
                    </Flex>
                    <Flex w='100%' h='75%' align='center' flexDir='column' padding='20px 40px'>
                        <Flex w='100%' h='100%' flexDir='column' gap='20px'>
                            <Input placeholder='Nome Completo' />
                            <Input placeholder='E-Mail' />
                            <Input placeholder='Assunto' />
                            <Textarea placeholder='Digite aqui sua mensagem...' height='60%'></Textarea>
                        </Flex>
                        <Flex w='100%' justify='end'>

                            <Button w='150px' h='50px' bg='brand.P2' color='white' border='3px solid' borderColor='brand.P2' fontWeight='bold' _hover={{ backgroundColor: 'white', color: 'brand.P2' }}>ENVIAR</Button>
                        </Flex>
                    </Flex>


                </form>
            </Flex >
        </Flex >
    )
}
