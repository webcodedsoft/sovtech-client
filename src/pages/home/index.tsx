import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Flex, Spinner, Text } from '@chakra-ui/react';
import { PEOPLES } from '../../queries';
import PeopleCard from './component/PeopleCard';

export default function Home() {
  const [people, setPeople] = useState([]);
  const { loading, data } = useQuery(PEOPLES, { variables: { pageNumber: 1 } });

  useEffect(() => {
    data && setPeople(data.peoples);
  }, [data]);
  return (
    <Flex
      bg='#e2e1e0'
      p={['5px', '20px']}
      h={[null, '100vh']}
      flex={1}
      flexDirection='column'
    >
      <Flex my='40px' justifyContent='center' alignItems='center'>
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
        <Flex flexWrap='wrap' justifyContent='center' alignItems='center'>
          {people.map((value, i) => (
            <PeopleCard key={i} person={value} />
          ))}
        </Flex>
      )}
    </Flex>
  );
}
