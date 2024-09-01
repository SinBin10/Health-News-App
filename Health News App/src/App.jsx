import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    async function fetchnews() {
      let healthnews = await fetch(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=db1e1f1d48da48b091d78f01261dbf92"
      );
      let final = await healthnews.json();
      console.log(final);
    }
    fetchnews();
  }, []);
  return <h1>Hello World</h1>;
};

export default App;
