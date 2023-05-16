'use client';

import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';


const AddPackage = ({fetchHomePageData}) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dropDownValue, setDropDownValue] = useState([])
  const [selectedValues, setSelectedValues] = useState([]);
  const [name, setName] = useState("")
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (selectedOptions) => {
    setSelectedValues(selectedOptions);
  };

  const fetchPlaceData = async () => {
    let newArr = [];
    await axios.get("http://localhost:1337/api/places").then((res) => {
    // console.log(res.data);  
    res.data.map((item) => {
        newArr.push({
          value: item.id, label: item.place
        })
      })
      setDropDownValue(newArr)
    }).catch((err) => {
      console.log(err);
    })
  }
  const handleSubmit = async () => {
    // console.log(selectedValues, name);
    let places = selectedValues.map((item) => {
      return item.value;
    })

    console.log({
      title: name,
      places: places
    });

    axios.post("http://localhost:1337/api/packages", {
      title: name,
      places: places
    }).then((res) => {
      console.log(res.data);
      fetchHomePageData();
      onClose();
    }).catch((err) => {
      console.log(err);
      toast({
        title: "Error",
        description: err.response.data.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      })
    })
  }

  

  useEffect(() => {
    fetchPlaceData();
  }, [])
  
  return (
    <>
      <Button onClick={onOpen}>Add Package</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Package</ModalHeader>
          <ModalCloseButton />
          <ModalBody gap={5}>
            <FormControl my={2} isRequired>
              <FormLabel>Package Name</FormLabel>
              <Input placeholder='Package Name' onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl my={2}>
              <Select
                isMulti
                name="colors"
                options={dropDownValue}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={handleChange}
                value={selectedValues}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter alignItems={'center'} justifyContent={'end'} gap={4}>
            <Button onClick={onClose}>Close</Button>
            <Button
              colorScheme='teal'
              isLoading={isSubmit}
              type='submit'
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default AddPackage