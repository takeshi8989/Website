import { Link } from "react-router-dom";
import data from "../../data/index.json";

type Data = {
  title: string;
  body: string;
};

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {data.map((item: Data) => (
        <div key={item.title}>
          <Link to={`/ja/${item.title}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
