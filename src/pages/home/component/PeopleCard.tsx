import { Flex, Text, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Results } from '../types';

type PeopleCardProps = { person: Results };
export default function PeopleCard({ person }: PeopleCardProps) {
  return (
    <Flex
      as={Link}
      to={`/people/${person.name}`}
      boxShadow='0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      transition: all 0.3s cubic-bezier(.25,.8,.25,1)'
      bg='#fff'
      m={['5px', '10px']}
      w={['160px', '230px']}
      p='20px'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      borderRadius='3px'
    >
      <Avatar
        src={`https://ui-avatars.com/api/?background=random&name=${person.name}`}
        loading='lazy'
        alt=''
        mb='20px'
      />
      <Text textAlign='center' fontWeight='bold'>
        {person.name}
      </Text>
    </Flex>
  );
}
