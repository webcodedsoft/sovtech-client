import { useQuery } from '@apollo/client';
import { Flex, Text, Spinner, Avatar, Box, Divider } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GET_PEOPLE_BY_NAME } from '../../queries';
import { Results } from '../home/types';
import NavBar from '../NavBar';

type Param = {
    personName: string;
};
export default function SinglePerson() {
    const param: Param = useParams();
    const [person, setPerson] = useState<Results | null>(null);
    const { loading, data } = useQuery(GET_PEOPLE_BY_NAME, { variables: { name: param?.personName } });

    useEffect(() => {
        data && setPerson(data.getPeopleByName);
    }, [data]);

    return (
        <NavBar page="details">
            <Flex p={['5px', '0px']} flex={1} flexDirection='column' justifyContent='center' alignItems='center'>
                {loading ?
                    <Spinner />
                    :
                    <Box maxW="sm" borderWidth="1px" overflow="hidden"
                        boxShadow='0 1px 3px rgba(0,0,0,0.12)'
                        bg='#fff'
                        w={'530px'}
                        p='20px'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        borderRadius='3px'
                    >

                        <Flex>
                            <Flex flexDirection="row">
                                <Avatar src={`https://ui-avatars.com/api/?background=random&name=${person?.name}`} loading='lazy' alt='' mb='20px' />
                                <Flex flexDirection="column" ml={2}>
                                    <Text color='black' mb={0} fontSize='20px' fontWeight='light'>
                                        {person?.name}
                                    </Text>
                                    <Box> <Box color="black" fontWeight="light" letterSpacing="wide" fontSize="xs" textTransform="uppercase">
                                        {person?.gender}
                                    </Box>
                                        <Text fontSize='10px' color='black' textTransform="uppercase">{person?.mass} mass &bull; {person?.height} height </Text>

                                        <Text fontSize='10px' mt={5} color='black' textTransform="uppercase">Home World</Text>
                                        <Divider orientation="horizontal" />

                                        <Flex mt={2} flexDirection="column">
                                            <Flex flexDirection="row" color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs">
                                                <Text>Name: {person?.homeworld?.name}</Text>
                                                <Text ml={2}>Population: {person?.homeworld?.population}</Text>
                                            </Flex>
                                            <Flex flexDirection="row" color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs">
                                                <Text>Climate: {person?.homeworld?.climate}</Text>
                                                <Text ml={2}>Gravity: {person?.homeworld?.gravity}</Text>
                                            </Flex>
                                            <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="initial">
                                                Terrain: {person?.homeworld?.terrain}
                                            </Box>
                                        </Flex>
                                    </Box>

                                </Flex>
                            </Flex>
                        </Flex>
                    </Box>
                }
            </Flex>
        </NavBar>
    )
}
