import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import GenericList from './components/GenericList';
import { interests, socials } from "./data";
import { skills } from "./data";
import { workExperience } from "./data";
import WorkExperience from './components/WorkExperience';


function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About />
      <GenericList header="Skills &amp; Technologies" listItems={skills} iconName="ChipIcon" listIconName="CheckCircleIcon" sectionName="skills" />
      {/* <GenericList header="Work Experience" listItems={workExperience} iconName="BriefcaseIcon" sectionName="work-experience" /> */}
      <WorkExperience />
      <GenericList header="Interests and Hobbies" listItems={interests} iconName="MusicNoteIcon" listIconName="ChevronRightIcon" sectionName="interests" />
      <GenericList header="Socials" listItems={socials} iconName="AtSymbolIcon" listIconName="ChevronRightIcon" sectionName="socials" />
      
    </main>
  );
}

export default App;
