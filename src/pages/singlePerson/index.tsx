import { useQuery } from '@apollo/client';
import { Flex, Text, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { GET_PEOPLE_BY_ID } from '../../queries';
import { Results } from '../home/types';

type Param = {
  personName: string;
};
export default function SinglePerson() {
  const param: Param = useParams();
  const [person, setPerson] = useState<Results | null>(null);
  const { loading, data } = useQuery(GET_PEOPLE_BY_ID, {
    variables: { name: param?.personName },
  });

  useEffect(() => {
    data && setPerson(data.getPeopleByName);
  }, [data]);

  return loading ? (
    <Flex my='40px' justifyContent='center' h='100vh' alignItems='center'>
      <Spinner />
    </Flex>
  ) : (
    <Flex flexDir='column' p='20px'>
      <Text>{person?.name}</Text>
      <Text>{person?.mass}</Text>
      <Text>{person?.height}</Text>
      <Text>{person?.homeworld}</Text>
      <Text>{person?.gender}</Text>
    </Flex>
  );
}
