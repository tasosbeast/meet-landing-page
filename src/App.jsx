import { Header } from "./stories/Header";
import { Hero } from "./stories/Hero";

function App() {
  return (
    <div className="App min-h-screen">
      <Header />
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
