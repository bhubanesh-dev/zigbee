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
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import Faculties from 'components/faculties/Faculties';
import Footer from 'components/footer/Footer';
import Navbar from 'components/navbar/Navbar';
import DepartmentHeroImg from 'assets/department.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Department() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Container maxW={'7xl'}>
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            backgroundColor={'green.100'}
            borderRadius='2xl'
            py='4'
            px='14'
            mb='2em'
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                fontWeight='black'
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                as='h2'
              >
                Meet Our Department
              </Heading>
              <Text>
                Grit, ceaseless striving, and an unquenchable thirst to achieve
                more and leap beyond perfection is what defines us, the
                Department of Computer Science and Application, OUTR,
                Bhubaneswar. The department is endued with an exceptional
                teaching team built on the ethos of innovative teaching and
                engaged learning. The teachers are aided by a very resourceful
                and responsible support staff who are the very background of
                this special family.
              </Text>
            </Stack>
            <Flex flex={1} justify={'center'} align={'center'}>
              <Image
                width='400'
                height='200'
                alt='zigbee hero'
                src={DepartmentHeroImg}
              />
            </Flex>
          </Stack>
          <Stack
            align={'center'}
            direction={'column'}
            py='2'
            my='2'
            fontSize={{ sm: '10px', base: '24px', md: '40px', lg: '56px' }}
          >
            <Heading as='h1'>Department of</Heading>
            <Heading as='h1'>Computer Science and Application</Heading>
          </Stack>
          <Container maxW='5xl'>
            <Stack spacing={5}>
              <Box>
                <Flex alignItems={'center'} gap={6}>
                  <Heading as='h4' size='lg' pr='2'>
                    Vision
                  </Heading>
                  <Divider
                    border='4px'
                    borderRadius={'2xl'}
                    borderColor='purple.100'
                  />
                </Flex>

                <Text fontSize='xl' textAlign={'justify'}>
                  To develop the student&apos;s skill to cope with the
                  challenging industries expectations and to spring up the
                  department to attain the international quality in the field of
                  Education, Research & Development.
                </Text>
              </Box>
              <Box textAlign={'justify'}>
                <Flex alignItems={'center'} gap={6}>
                  <Heading as='h4' size='lg' pr='2'>
                    Mission
                  </Heading>
                  <Divider
                    border='4px'
                    borderRadius={'2xl'}
                    borderColor='cyan.100'
                  />
                </Flex>
                <UnorderedList fontSize='xl'>
                  <ListItem>
                    To create a learning environment for enhancing skill
                  </ListItem>
                  <ListItem>
                    To Place student in reputed organisation by reflecting their
                    technical as well as soft skills.
                  </ListItem>
                  <ListItem>
                    To make the students societal, sympathetic and progressive
                    in upliftment of the mankind.
                  </ListItem>
                  <ListItem>
                    To encourage students to have innovative, ideals that can be
                    converted to feasible and implementable project.
                  </ListItem>
                </UnorderedList>
              </Box>
              <Box textAlign={'justify'}>
                <Flex alignItems={'center'} gap={6}>
                  <Heading as='h4' size='lg' pr='2' whiteSpace={'nowrap'}>
                    Programme Educational Objectives(PEOs)
                  </Heading>
                  <Divider
                    border='4px'
                    borderRadius={'2xl'}
                    borderColor='teal.100'
                  />
                </Flex>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PEO 1:{' '}
                  </Text>
                  Excel in professional career and/or higher education by
                  acquiring knowledge and skill in problem solving, analysis,
                  programming and development.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PEO 2:{' '}
                  </Text>
                  Analyze real life problems, development of software
                  appropriate to its solutions that are technically sound,
                  economically feasible and industrially acceptable.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PEO 3:{' '}
                  </Text>
                  Exhibit professionalism, ethical attitude, communication
                  skills, team work in their profession and adapt to current
                  trends by engaging in lifelong learning.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PEO 4:{' '}
                  </Text>
                  Able to innovate programmatic, creative and economic solutions
                  for real life problems with high degree of technical expertise
                  and professional competency.
                </Text>
              </Box>
              <Box textAlign={'justify'}>
                <Flex alignItems={'center'} gap={6}>
                  <Heading as='h4' size='lg' pr='2' whiteSpace={'nowrap'}>
                    Program Outcomes (POs)
                  </Heading>
                  <Divider
                    border='4px'
                    borderRadius={'2xl'}
                    borderColor='green.100'
                  />
                </Flex>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 1:
                  </Text>
                  Acquiring sufficient knowledge on fundamentals of computer
                  sciences, applied mathematics and computational aspects and to
                  apply the knowledge gained on laboratory experiments.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 2:
                  </Text>
                  Possessing good listening, reading, writing and spoken skills
                  on technical English communications.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 3:
                  </Text>
                  Applying the communicative language skills and professional
                  knowledge to earn job opportunities in leading organizations.
                </Text>
                <Text>
                  <Text as='span' fontWeight={'bold'}>
                    PO 4:
                  </Text>
                  Motivated with an interest to undergo higher studies in India
                  or other countries.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 5:
                  </Text>
                  Ability to design, construct and test application oriented
                  programs and projects related to IT industry.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 6:
                  </Text>
                  Developing skills to carry our experiments listed in syllabus
                  and to implement individual/group project.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 7:
                  </Text>
                  Learning professional, managerial, ethical and environmental
                  based principles to become good citizen of our nation.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 8:
                  </Text>
                  Ability to use computers for programming, simulation,
                  documentation, calculation, slide presentation etc.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 9:
                  </Text>
                  Acquiring required broader knowledge on all other computer
                  science disciplines.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 10:
                  </Text>
                  Flexibility to execute team work without any disparity based
                  on gender, interdiscipline, etc.
                </Text>
                <Text fontSize='xl'>
                  <Text as='span' fontWeight={'bold'}>
                    PO 11:
                  </Text>
                  Presenting technical papers in the National / International
                  Conferences journals, Workshops and Symposia.
                </Text>
              </Box>
              <Box>
                <Flex alignItems={'center'} gap={6}>
                  <Heading as='h4' size='lg' whiteSpace={'nowrap'}>
                    About the Department
                  </Heading>
                  <Divider
                    border='4px'
                    borderRadius={'2xl'}
                    borderColor='blue.100'
                  />
                </Flex>
                <Text fontSize='xl' textAlign={'justify'}>
                  Department of Computer Science and Application was established
                  in the year 1993, in College of Engineering and Technology,
                  OUAT. The PGDCA program, under the department of Electrical
                  Engineering from 1989 to 1992 was transformed into the MCA
                  program and was bought under the CSA department. With an
                  initial strength of 30 students, the department started in the
                  year 1993. In the year 2002, College of Engineering and
                  Technology was transferred from Orissa University of
                  Agriculture and Technology (OUAT) to Biju Patnaik University
                  of Technology (BPUT). In the past 22 years, the department has
                  developed manifold to join the club of elite departments in
                  the state. The very fact that only the top rankers of the OJEE
                  are eligible to study in this department speaks tons about the
                  importance of the department in the state educational
                  scenario. The department is committed to provide best quality
                  knowledge in a lucid and less tiresome ways. The alumni of the
                  department include software developers, bankers, academicians,
                  entrepreneurs, and people from various other fields. The
                  placement record of this department bears the testimony of its
                  dedication and determination.
                </Text>
              </Box>
            </Stack>
          </Container>
          <Box mt={10} width={'100%'} px={'16px'}>
            <Faculties />
          </Box>
        </Container>
      </motion.div>

      <Footer />
    </>
  );
}
