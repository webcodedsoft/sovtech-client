import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Flex } from '@chakra-ui/react';

export default function NavBar({ children, page }: any) {
    return (
        <Flex flex={1} flexDirection="column">
            <Box px={4} h={['9vh', '8vh']} boxShadow='0 1px 3px rgba(0,0,0,0.22)'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                borderRadius='3px'>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} >
                    {page === "Home" ? <Box>Logo Here</Box> : <Box onClick={() => global.window.history.back()}><ArrowBackIcon w={30} h={30} /></Box>}
                </Flex>
            </Box>
            <Flex mt={10} h={['20rem', '82vh']} flexDirection="column">
                {children}
            </Flex>
        </Flex>
        
    );
}