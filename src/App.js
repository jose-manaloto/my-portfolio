import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import GenericList from './components/GenericList';
import { interests, socials, skills,  } from "./data";
import WorkExperience from './components/WorkExperience';


function App() {
  return (
    <main className="text-black bg-oat dark:text-gray-400 dark:bg-gray-900 body-font">
      <Navbar />
      <About />
      <GenericList header="About me" listItems={[]} iconName="AtSymbolIcon" listIconName="ChevronRightIcon" sectionName="intro" />
      <GenericList header="Skills &amp; Technologies" listItems={skills} iconName="ChipIcon" listIconName="CheckCircleIcon" sectionName="skills" />
      {/* <GenericList header="Work Experience" listItems={workExperience} iconName="BriefcaseIcon" sectionName="work-experience" /> */}
      <WorkExperience />
      <GenericList header="Interests and Hobbies" listItems={interests} iconName="MusicNoteIcon" listIconName="ChevronRightIcon" sectionName="interests" />
      <GenericList header="Socials" listItems={socials} iconName="AtSymbolIcon" listIconName="ChevronRightIcon" sectionName="socials" />
      
    </main>
  );
}

export default App;
