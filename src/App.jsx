import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Realtors from "./components/Realtors";
import Features from "./components/Features";
import StoryPictures from "./components/StoryPictures";
import StoryContent from "./components/StoryContent";
import Homes from "./components/Homes";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Sidebar />
      </header>
      <main>
        <Header />
        <Realtors />
        <Features />
        <StoryPictures />
        <StoryContent />
        <Homes />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
