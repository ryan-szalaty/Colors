import Palette from "./palette";
import seedColors from "./seedColors";
import generatePalette from "./colorHelpers";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div>
      <Palette palette={generatePalette(seedColors[4])}/>
    </div>
  );
}

export default App;
