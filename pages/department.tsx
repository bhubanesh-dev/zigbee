import {
  Center,
  Container,
  Heading,
  Stack,
  Divider,
  Text,
  Flex,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from "@chakra-ui/react";
import Footer from "components/footer/Footer";
import Navbar from "components/navbar/Navbar";

export default function Department() {
  return (
    <>
      <Navbar />
      <Container maxW={"7xl"}>
        <Stack align={"center"} direction={"column"} py="2" my="2">
          <Heading as="h1" size="2xl">
            Department of
          </Heading>
          <Heading as="h1" size="2xl">
            Computer Science and Application
          </Heading>
        </Stack>
        <Container maxW="5xl">
          <Stack spacing={5}>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size="lg" pr="2">
                  Vision
                </Heading>
                <Divider border="2px" borderRadius={"2xl"} />
              </Flex>

              <Text fontSize="xl">
                To develop the student's’ skill to cope with the challenging
                industries expectations and to spring up the department to
                attain the
              </Text>
              <Text fontSize="xl">
                {" "}
                international quality in the field of Education, Research &
                Development.
              </Text>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size="lg" pr="2">
                  Mission
                </Heading>
                <Divider border="2px" borderRadius={"2xl"} />
              </Flex>
              <UnorderedList fontSize="xl">
                <ListItem>
                  To create a learning environment for enhancing skill
                </ListItem>
                <ListItem>
                  To Place student in reputed organisation by reflecting their
                  technical as well as soft skills.
                </ListItem>
                <ListItem>
                  To make the students societal, sympathetic and progressive in
                  upliftment of the mankind.
                </ListItem>
                <ListItem>
                  To encourage students to have innovative, ideals that can be
                  converted to feasible and implementable project.
                </ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size="lg" pr="2">
                  Programme Educational Objectives (PEOs)
                </Heading>
                <Divider border="2px" borderRadius={"2xl"} />
              </Flex>
              <Text fontSize="xl">
                PEO 1: Excel in professional career and/or higher education by
                acquiring knowledge and skill in problem solving, analysis,
                programming and development.
              </Text>
              <Text fontSize="xl">
                PEO 2:Analyze real life problems, development of software
                appropriate to its solutions that are technically sound,
                economically feasible and industrially acceptable.
              </Text>
              <Text fontSize="xl">
                PEO 3:Exhibit professionalism, ethical attitude, communication
                skills, team work in their profession and adapt to current
                trends by engaging in lifelong learning.
              </Text>
              <Text fontSize="xl">
                PEO 4: Able to innovate programmatic, creative and economic
                solutions for real life problems with high degree of technical
                expertise and professional competency.
              </Text>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size="lg" pr="2">
                  Program Outcomes (POs)
                </Heading>
                <Divider border="2px" borderRadius={"2xl"} />
              </Flex>
              <Text fontSize="xl">
                PO 1: Acquiring sufficient knowledge on fundamentals of computer
                sciences, applied mathematics and computational aspects and to
                apply the knowledge gained on laboratory experiments.
              </Text>
              <Text fontSize="xl">
                PO 2: Possessing good listening, reading, writing and spoken
                skills on technical English communications.
              </Text>
              <Text fontSize="xl">
                PO 3: Applying the communicative language skills and
                professional knowledge to earn job opportunities in leading
                organizations.
              </Text>
              <Text>
                PO 4: Motivated with an interest to undergo higher studies in
                India or other countries.
              </Text>
              <Text fontSize="xl">
                PO 5: Ability to design, construct and test application oriented
                programs and projects related to IT industry.
              </Text>
              <Text fontSize="xl">
                PO 6: Developing skills to carry our experiments listed in
                syllabus and to implement individual/group project.
              </Text>
              <Text fontSize="xl">
                PO 7: Learning professional, managerial, ethical and
                environmental based principles to become good citizen of our
                nation.
              </Text>
              <Text fontSize="xl">
                PO 8: Ability to use computers for programming, simulation,
                documentation, calculation, slide presentation etc.
              </Text>
              <Text fontSize="xl">
                PO 9: Acquiring required broader knowledge on all other computer
                science disciplines.
              </Text>
              <Text fontSize="xl">
                PO 10: Flexibility to execute team work without any disparity
                based on gender, interdiscipline, etc.
              </Text>
              <Text fontSize="xl">
                PO 11: Presenting technical papers in the National /
                International Conferences journals, Workshops and Symposia.
              </Text>
            </Box>
            <Box>
              <Flex alignItems={"center"}>
                <Heading as="h4" size="lg" pr="2">
                  About the Department
                </Heading>
                <Divider border="2px" borderRadius={"2xl"} />
              </Flex>
              <Text fontSize="xl">
                Department of Computer Science and Application was established
                in the year 1993, in College of Engineering and Technology,
                OUAT. The PGDCA program, under the department of Electrical
                Engineering from 1989 to 1992 was transformed into the MCA
                program and was bought under the CSA department. With an initial
                strength of 30 students, the department started in the year
                1993. In the year 2002, College of Engineering and Technology
                was transferred from Orissa University of Agriculture and
                Technology (OUAT) to Biju Patnaik University of Technology
                (BPUT). In the past 22 years, the department has developed
                manifold to join the club of elite departments in the state. The
                very fact that only the top rankers of the OJEE are eligible to
                study in this department speaks tons about the importance of the
                department in the state educational scenario. The department is
                committed to provide best quality knowledge in a lucid and less
                tiresome ways. The alumni of the department include software
                developers, bankers, academicians, entrepreneurs, and people
                from various other fields. The placement record of this
                department bears the testimony of its dedication and
                determination.
              </Text>
            </Box>
          </Stack>
        </Container>
        <Box mt="5">
          <Footer />
        </Box>
      </Container>
    </>
  );
}
