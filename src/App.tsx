import DarkModeIconButton from './components/DarkModeIconButton';
import { ArrowUpIcon } from '@chakra-ui/icons'

import { Container, IconButton, SimpleGrid } from "@chakra-ui/react";
import Column from "./components/Column";
import { ColumnType, DayType } from "./utils/enums";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

// import { useLocalStorage } from 'usehooks-ts'; // Assuming this library is used for local storage

import useTaskCollection from './hooks/useTaskCollection';

import NotesSection from './components/NotesSection';

import "./App.css";

import { useState, useEffect } from 'react';

const App = () => {

  // Function to scroll to the current day's section
  const scrollToToday = () => {
    const todaySection = document.getElementById(new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase());
    if (todaySection) {
      todaySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  //
  const [isVisible, setIsVisible] = useState(false); // State to track button visibility

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Effect to add scroll event listener
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) { // Use scrollY instead of pageYOffset
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const { resetTasks } = useTaskCollection();

  // Function to handle task deletion
  const deletetasks = () => {
    resetTasks();
    alert('All tasks have been cleared!'); // Optional: Add a confirmation message
  };

  return (
    <main>

      <div className="main">
        <div className="gradient"></div>
      </div>


      {/* <h1 className="head_text">
        <span className="orange_gradient ">Organize </span>
        Your Life
      </h1> */}
      <h1 className="head_text">
        Organize Your Life with<br />
        <span className="orange_gradient "> Kanbanize </span>
      </h1>
      <h1 className="desc">
        Elevate your workflow with our dynamic kanban boards, designed to simplify task organization and boost efficiency.
      </h1>

      <hr />

      <DarkModeIconButton position={{ base: "absolute", "2xl": "fixed" }} top={{ base: -12, "2xl": 4 }} right={3} />

      <IconButton
        //position="absolute"
        position={{ base: "absolute", "2xl": "fixed" }}
        //top={-12}
        top={{ base: -12, "2xl": 4 }}
        right="135px"
        onClick={deletetasks}
        aria-label="cleaer tasks"
        variant="outline"
        colorScheme="red"
        //icon={<TimeIcon />}
        icon={<span>Clear Tasks</span>}
        px={2}
      />

      <IconButton
        //position="absolute"
        position={{ base: "absolute", "2xl": "fixed" }}
        //top={-12}
        top={{ base: -12, "2xl": 4 }}
        right={16}
        onClick={scrollToToday}
        aria-label="Scroll to Today"
        //variant="outline"
        //variant="ghost"
        //colorScheme="black"
        //icon={<TimeIcon />}
        icon={<span>Today</span>}
        px={2}
      />

      {isVisible &&
        <IconButton
          //position="absolute"
          position={{ base: "absolute", xl: "fixed" }}
          //top={-12}
          top={{ base: -12, xl: 4 }}
          left={4}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          variant="outline"
          //variant="ghost"
          //colorScheme="black"
          display={{ base: "none", xl: "inline-flex" }} // Hide on screens below xl
          icon={<ArrowUpIcon />}
          px={2}
        />
      }

      <DndProvider backend={HTML5Backend}>
        <Container
          id='monday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        //opacity={5}
        // boxShadow="0px 0px 30px rgba(0, 0, 0, 0.2)"
        //boxShadow="lg"
        //rounded="lg"
        //borderWidth="1px"  // Add border
        //borderColor="gray.200"  // Border color
        >
          {/* <h1 style={{ fontSize: 30, fontWeight: 500, fontStyle: "italic", paddingBottom: "10px" }}>Monday</h1> */}
          {/* <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight="600"
            //textAlign="center"
            bgGradient="linear(to-l,rgb(255, 255, 255),rgb(32, 160, 219))"
            bgClip="text"
            mt={4}
            mb={4}
            fontFamily={"serif"}
          >
            Monday
          </Heading> */}
          <h1 className="desc2">
            Monday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            {/* {Object.values(ColumnType).map((column) => (
            <Column key={column} column={column} />
          ))} */}
            <Column column={ColumnType.TO_DO} day={DayType.monday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.monday} />
            <Column column={ColumnType.BLOCKED} day={DayType.monday} />
            <Column column={ColumnType.COMPLETED} day={DayType.monday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='tuesday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Tuesday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.tuesday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.tuesday} />
            <Column column={ColumnType.BLOCKED} day={DayType.tuesday} />
            <Column column={ColumnType.COMPLETED} day={DayType.tuesday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='wednesday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Wednesday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.wednesday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.wednesday} />
            <Column column={ColumnType.BLOCKED} day={DayType.wednesday} />
            <Column column={ColumnType.COMPLETED} day={DayType.wednesday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='thursday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Thursday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.thursday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.thursday} />
            <Column column={ColumnType.BLOCKED} day={DayType.thursday} />
            <Column column={ColumnType.COMPLETED} day={DayType.thursday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='friday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Friday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.friday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.friday} />
            <Column column={ColumnType.BLOCKED} day={DayType.friday} />
            <Column column={ColumnType.COMPLETED} day={DayType.friday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='saturday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Saturday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.saturday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.saturday} />
            <Column column={ColumnType.BLOCKED} day={DayType.saturday} />
            <Column column={ColumnType.COMPLETED} day={DayType.saturday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          id='sunday'
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={3}
          mt={5}
          mb={10}
        >
          <h1 className="desc2">
            Sunday
          </h1>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 4 }} spacing={{ base: 16, sm: 4, md: 4, lg: 6 }}>
            <Column column={ColumnType.TO_DO} day={DayType.sunday} />
            <Column column={ColumnType.IN_PROGRESS} day={DayType.sunday} />
            <Column column={ColumnType.BLOCKED} day={DayType.sunday} />
            <Column column={ColumnType.COMPLETED} day={DayType.sunday} />
          </SimpleGrid>
        </Container>
      </DndProvider>

      <hr />

      {/* Notes section */}
      <DndProvider backend={HTML5Backend}>
        <Container maxWidth="container.lg" mt={10} pb={10}>
          <NotesSection />
        </Container>
      </DndProvider>

      <hr />

      <DndProvider backend={HTML5Backend}>
        <Container
          maxWidth="container.lg"
          px={{ base: 4, sm: 14, md: 4 }}
          pb={5}
          pt={1}
          mt={5}
          mb={2}
        >
          <footer>
            <p className="footer_text">
              <a href="https://yashmavani.tech"><span className='yash'>Yash Mavani</span></a> Production
            </p>
          </footer>

        </Container>
      </DndProvider>



    </main>
  );
};

export default App;
