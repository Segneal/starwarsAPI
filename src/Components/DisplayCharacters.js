import { Box, Center, FormControl, Input, Button } from "@chakra-ui/react";

import React, { useState } from "react";
import useFetchCharacters from "../helpers/useFetchCharacters";
import CharacterCard from "./CharacterCard";
import Loading from "./Loading";

export default function DisplayCharacters() {
  const [formData, setFormData] = useState({ searchCharacter: "" });
  const { characters, loading, error } = useFetchCharacters();
  const [char, setChar] = useState();
  const [charList, setCharList] = useState();

  // busca caracter en la lista
  const search = () => {
    let ar = characters.filter((item) => {
      return item.name
        .toLowerCase()
        .includes(formData.searchCharacter.toLowerCase());
    });
    ar.length === 1 ? setChar([...ar]) : setCharList(ar);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  return (
    <Box h="100vh">
      {loading ? (
        <Loading />
      ) : (
        <Box mt="25" h="100vh">
          <FormControl>
            <Center>
              <Input
                letterSpacing="0.15rem"
                placeholder="  SEARCH CHARACTER"
                w="60%"
                h="50"
                bgColor="#565656"
                borderColor="white"
                color="white"
                name="searchCharacter"
                value={formData.searchCharacter.toUpperCase()}
                onChange={handleChange}
                _hover={{ bgColor: "#424242" }}
              ></Input>

              <Button
                type="submit"
                borderColor="2px solid white"
                bgColor="#565656"
                h="50"
                w="50"
                color="white"
                onClick={search}
                _hover={{ bgColor: "#424242" }}
              >
                SEARCH
              </Button>
            </Center>
          </FormControl>
          <Box h="100vh">{char && <CharacterCard char={char} />}</Box>
        </Box>
      )}
    </Box>
  );
}
