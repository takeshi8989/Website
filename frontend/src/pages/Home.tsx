import { Link } from "react-router-dom";
import data from "../../data/index.json";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Configure Fuse.js options
  const fuseOptions = {
    keys: ["title", "body"], // which fields to search in
    threshold: 0.4, // how fuzzy the match should be (0 = exact, 1 = very fuzzy)
  };

  // Create a Fuse instance (use useMemo so we don't re-instantiate on every render)
  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data]);

  // Perform search
  const searchResults = searchTerm
    ? fuse.search(searchTerm).map((result) => {
        console.log(result);
        return result.item;
      })
    : data;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Search Articles (Fuzzy)</h1>
      <input
        type="text"
        placeholder="Search..."
        style={{ width: 200, marginBottom: "1rem" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {searchResults.map((article, idx) => (
          <li key={idx} style={{ marginBottom: "1rem" }}>
            <Link to={`/ja/${article.title}`}>{article.title}</Link>
            <pre>{article.body}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
