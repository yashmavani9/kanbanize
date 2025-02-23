import { TimeIcon } from '@chakra-ui/icons';
import DarkModeIconButton from './components/DarkModeIconButton';

import { Container, Heading, IconButton, SimpleGrid } from "@chakra-ui/react";
import Column from "./components/Column";
import { ColumnType, DayType } from "./utils/enums";

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import "./App.css";

const App = () => {

  // Function to scroll to the current day's section
  const scrollToToday = () => {
    const todaySection = document.getElementById(new Date().toLocaleDateString("en-US", { weekday: "long" }).toLowerCase());
    if (todaySection) {
      todaySection.scrollIntoView({ behavior: "smooth" });
    }
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

      {/* <Heading
        fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
        fontWeight="bold"
        textAlign="center"
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        mt={4}
      >
        Welcome to DnD Kanban
      </Heading> */}

      {/* <DarkModeIconButton position="absolute" top={-12} right={3} /> */}

      <DarkModeIconButton position={{ base: "absolute", xl: "fixed" }} top={{ base: -12, xl: 4 }} right={3} />

      <IconButton
        //position="absolute"
        position={{ base: "absolute", xl: "fixed" }}
        //top={-12}
        top={{ base: -12, xl: 4 }}
        right={16}
        onClick={scrollToToday}
        aria-label="Scroll to Today"
        //variant="ghost"
        //colorScheme="blue"
        //icon={<TimeIcon />}
        icon={<span>Today</span>}
        px={2}
      />

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
              <a href="https://yashmavani.framer.website/"><span className='yash'>Yash Mavani</span></a> Production
            </p>
          </footer>

        </Container>
      </DndProvider>





    </main>
  );
};

export default App;
