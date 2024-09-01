import { useEffect } from "react";

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    async function fetchnews() {
      let healthnews = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=${apiKey}`
      );
      let final = await healthnews.json();
      console.log(final);
    }
    fetchnews();
  }, []);
  return <div className="h-full bg-slate-900"></div>;
};

export default App;
