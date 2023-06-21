import { Flex, Image, Link, List, ListItem } from "@chakra-ui/react";
import logo from './Logo Pedro - lupa.png'


export default function Navbar() {
    const NavLinks = [
        {
            title: 'Home',
            link: '#home'
        },
        {
            title: 'Serviços',
            link: '#services'
        },
        {
            title: 'Sobre Mim',
            link: '#about'
        },
        {
            title: 'Comunidade',
            link: '#community'
        },
        {
            title: 'Contato',
            link: '#forms'
        },
        {
            title: 'Parceiros',
            link: '#partners'
        }

    ]
    return (
        <Flex as='nav' id='home' h='10vh' bg='transparent' align='center' justify='space-between' padding='0px 10px' position='relative'>
            <Image src={logo} h='80%' alt='Logo Pedro Molitor' />
            <List display='flex' gap='30px' fontWeight={600}>
                {
                    NavLinks.map((item, index) => (
                        <Link key={index} href={item.link}
                            transition='all 0.3s ease-in-out' _hover={{ color: 'brand.P1', transform: 'scale(1.05)', borderBottom: '1px solid' }}>
                            <ListItem fontSize='20px'>
                                {item.title}
                            </ListItem>
                        </Link>
                    ))
                }
            </List>
        </Flex>
    )
}
