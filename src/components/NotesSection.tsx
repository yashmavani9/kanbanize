import React from 'react';
import { Textarea, Button, Box, VStack } from '@chakra-ui/react';
import useNotes from '../hooks/useNotes'; // Import the useNotes hook

const NotesSection = () => {
    const { notes, updateNotes, clearNotes } = useNotes();

    const handleNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        updateNotes(e.target.value); // Update notes in local storage
    };

    return (
        <Box mt={-16} px={5}>
            <VStack align="start" spacing={4}>
                <h1 className="head_text" style={{ fontSize: '3rem', marginLeft: "auto", marginRight: "auto", marginBottom: "-7px" }}>
                    NotePad
                </h1>
                <p className='desc' style={{marginTop: "0px", paddingTop: "0px"}}>
                    This is the right place to dump your thoughts
                </p>
                <Textarea
                    value={notes}
                    onChange={handleNotesChange}
                    placeholder="Type your notes here..."
                    rows={5}
                    resize="vertical"
                    minH={300}
                />
                <Button onClick={clearNotes} variant={"solid"} colorScheme="red">
                    Clear Notes
                </Button>
            </VStack>
        </Box>
    );
};

export default NotesSection;