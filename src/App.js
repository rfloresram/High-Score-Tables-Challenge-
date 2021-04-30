import "./App.css";
import HighScoreTable from "./HighScoreTable";
import Footer from "./Footer";
import scores from "./scores";
import WorldwideScores from "./WorldwideScores";

function App() {
  return (
    <div>
      <header>High Scores per Country</header>
      <WorldwideScores scores={scores} />
      <HighScoreTable />
      <Footer />
    </div>
  );
}

export default App;