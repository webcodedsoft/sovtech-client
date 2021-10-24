import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Button, ButtonGroup, Flex, IconButton, Spinner, Text } from '@chakra-ui/react';
import { PEOPLES } from '../../../queries';
import PeopleCard from './PeopleCard';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import NavBar from '../../NavBar';

// The default icon size is 1em (16px)
export default function Home() {
    const [people, setPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const { loading, data } = useQuery(PEOPLES, { variables: { pageNumber: page } });

    useEffect(() => {
        data && setPeople(data.peoples.results);
        data && setTotalPage(data.peoples.count);
    }, [data]);

    return (
        <NavBar page="Home">
            <Box
                flexDirection='column'
            >
                <Flex justifyContent='center' alignItems='center'>
                    <Text
                        fontWeight='bold'
                        fontSize='35px'
                        fontFamily="'Zen Kurenaido', sans-serif"
                    >
                        SovTech Challenge
                    </Text>
                </Flex>

                {loading ? (
                    <Flex my='40px' justifyContent='center' alignItems='center'>
                        <Spinner />
                    </Flex>
                ) : (
                    <>
                        <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
                            {people.map((value, i) => (
                                <PeopleCard key={i} person={value} />
                            ))}
                        </Flex>

                        <Flex my='0px'  justifyContent='space-around' alignItems='center' m={10}>
                            <Text fontWeight='bold' fontSize='20px'>
                                Total Page: {totalPage}
                            </Text>
                            <Text fontWeight='bold' fontSize='20px'>
                                Page Left: {totalPage - page * 10 < 1 ? 0 : totalPage - page}
                            </Text>
                        </Flex>

                        <Flex my='0px' justifyContent='space-around' alignItems='center' mb={10}>
                            <ButtonGroup size="sm" isAttached isDisabled={page <= 1} variant="outline" ml={['900', '300']} onClick={() => setPage(page - 1)}>
                                <IconButton aria-label="Previous" icon={<ArrowBackIcon />} />
                                <Button mr="-px">Prev</Button>
                            </ButtonGroup>
                            <ButtonGroup size="sm" isAttached isDisabled={totalPage - page * 10 < 1} variant="outline" mr={['900', '300']} onClick={() => setPage(page + 1)}>
                                <IconButton aria-label="Next" icon={<ArrowForwardIcon />} />
                                <Button mr="-px">Next</Button>
                            </ButtonGroup>
                        </Flex>

                    </>

                )}
            </Box>
        </NavBar>
    )
}
