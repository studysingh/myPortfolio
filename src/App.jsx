import { styles } from "./theme/styles";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Achievements } from "./components/Achievements";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div style={styles.root}>
      <div style={styles.gridBg} />
      <Navbar />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}
