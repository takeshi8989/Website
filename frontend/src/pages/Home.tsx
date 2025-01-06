import { FC, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import data from "../../data/index.json";
import HighlightedText from "../components/HighlightedText";

interface Article {
  title: string;
  body: string;
}

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredArticles = useMemo(() => {
    if (!searchTerm.trim()) {
      return data;
    }

    const lowerSearch = searchTerm.toLowerCase();

    return data.filter(
      (item: Article) =>
        item.title.toLowerCase().includes(lowerSearch) ||
        item.body.toLowerCase().includes(lowerSearch)
    );
  }, [searchTerm]);

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Search Articles</h1>
      <input
        type="text"
        placeholder="Search..."
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "0.5rem",
          marginBottom: "1rem",
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filteredArticles.length === 0 ? (
        <p>No matching articles.</p>
      ) : (
        <div>
          {filteredArticles.map((article) => (
            <div key={article.title} style={{ marginBottom: "2rem" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Link to={`/ja/${encodeURIComponent(article.title)}`}>
                  <HighlightedText
                    text={article.title}
                    highlight={searchTerm}
                  />
                </Link>
              </h2>

              <div style={{ fontSize: "0.9rem" }}>
                {extractHighlightedSnippet(article.body, searchTerm)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/**
 * Extracts a snippet from the body that includes the first occurrence of the search term.
 * Highlights the matched term.
 */
const extractHighlightedSnippet = (body: string, searchTerm: string) => {
  if (!searchTerm.trim()) {
    // Return the first 200 characters if no search term
    return <p>{body.slice(0, 200)}...</p>;
  }

  const lowerBody = body.toLowerCase();
  const lowerSearch = searchTerm.toLowerCase();
  const index = lowerBody.indexOf(lowerSearch);

  if (index === -1) {
    // If not found, return the first 200 characters
    return <p>{body.slice(0, 200)}...</p>;
  }

  // Define snippet length
  const snippetLength = 100;
  const start = Math.max(index - snippetLength / 2, 0);
  const end = start + snippetLength;

  const snippet = body.slice(start, end);

  return (
    <p>
      {start > 0 && "... "}
      <HighlightedText text={snippet} highlight={searchTerm} />
      {end < body.length && " ..."}
    </p>
  );
};

export default Home;
