import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";



export default function Informations() {
    const infos = [
        {
            title: 'Facebook',
            icon: 'ic:baseline-facebook',
            link: 'https://www.facebook.com/pedro.molitor'
        },
        {
            title: 'Instagram',
            icon: 'mdi:instagram',
            link: 'https://www.instagram.com/conexao.odontolegal/'
        },
        {
            title: 'Youtube',
            icon: 'ri:youtube-line',
            link: 'https://www.youtube.com/@conexao.odontolegal'
        },
        {
            title: 'LinkedIn',
            icon: "mdi:linkedin",
            link: 'https://www.linkedin.com/in/pedromolitor/'
        },
        {
            title: 'Lattes',
            icon: 'mdi:resume',
            link: 'http://lattes.cnpq.br/3271081768759406'
        },
    ]
    return (
        <Flex as='section' h='10vh' w='100%' bg='brand.S3'>
            <List display='flex' w='100%' color='white'
                justifyContent='space-around' alignItems='center'>
                {infos.map((info, index) => (
                    <ListItem key={index} _hover={{ color: 'brand.hover' }}>
                        <Link display='flex' alignItems='center' flexDir='column' target="_blank" href={info.link}>
                            <Icon fontSize='40px' icon={info.icon} />
                            <Text>{info.title}</Text>
                        </Link>

                    </ListItem>
                ))}
            </List>
        </Flex>
    )
}
