import { Search2Icon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React from 'react'

type SearchInputProps = {
    // user: 
}

const SearchInput:React.FC<SearchInputProps> = () => {
    return (
        <Flex flexGrow={1} mr={2} align='center'>
              <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<Search2Icon color='gray.400' mb={1} />}
                />
                <Input 
                    placeholder='Search Reddit' 
                    fontSize='10pt' 
                    _placeholder={{ color: "gray.500"}}
                    _hover={{
                        bg: 'white',
                        border: '1px solid',
                        borderColor: "blue.500",
                    }}
                    _focus={{
                        outline: 'none',
                        boder: '1px solid',
                        borderColor: "blue.500"
                    }}
                    height='34px'
                    bg='gray.50'
                 />
            </InputGroup>
        </Flex>
    )
}
export default SearchInput