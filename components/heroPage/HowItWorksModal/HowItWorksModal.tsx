import {
  List,
  ListIcon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { MdLabelImportant } from "react-icons/md";

export default function HowItWorksModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        textColor={"toneDownText"}
        onClick={onOpen}
        _hover={{ textColor: "white", cursor: "pointer" }}
      >
        How does it work?
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How does it work?</ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="justify">
            Hello, <br />
            <p>this is QuickForm, a simple web project for creating surveys.</p>
            <br />
            <p>
              QuickForm does not require you to login, you simply start
              composing your survey and then publish it. After publishing you
              will be provided with two links:
              <List spacing={2} my="2">
                <ListItem>
                  <ListIcon as={MdLabelImportant} />
                  First link is for your respondents and is the one you will be
                  sharing,
                </ListItem>
                <ListItem>
                  <ListIcon as={MdLabelImportant} />
                  Second link is for you, to have an insight to the provided
                  answers.
                </ListItem>
              </List>
            </p>
            <br />
            <Text textColor="red.500">
              As there is no internal user profiles, make sure to save those
              links, as you won't be able to get them back after leaving the
              page.
            </Text>
          </ModalBody>

          <ModalFooter>
            <Text fontSize="xs">
              Created by{" "}
              <a href="https://github.com/Kozaa" target="_blanc">
                Kozaa
              </a>
            </Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
