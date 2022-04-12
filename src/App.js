import logo from "./logo.svg";
import "./App.css";
import Papa from "papaparse";

function App() {
  let final = {};
  return (
    <div>
      <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={(e) => {
          const files = e.target.files;
          console.log(files);
          if (files) {
            console.log(files[0]);
            Papa.parse(files[0], {
              complete: (results) => {
                console.log("Finished:", results.data);
                let test = results.data;
                test.forEach((e, i) => {
                  final[e[0]] = e[1];
                });
                console.log(final, null, 2);
              },
            });
          }
        }}
      />
    </div>
  );
}

export default App;
