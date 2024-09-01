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
  return <div className="h-full bg-slate-900"></div>;
};

export default App;
