import React, { FC, useMemo, useState } from "react";
import Fuse from "fuse.js";
import data from "../../data/index.json";
import { Link } from "react-router-dom";

// Define the shape of each article in your JSON
interface Article {
  title: string;
  body: string;
}

// Fuse's result object shape for TypeScript
interface FuseMatch {
  indices: [number, number][];
  key: string;
  value: string;
  arrayIndex?: number;
}

interface FuseResult {
  item: Article;
  matches?: FuseMatch[];
}

const Home: FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Configure Fuse.js
  const fuseOptions = useMemo(
    () => ({
      keys: ["title", "body"],
      includeMatches: true,
      threshold: 0.25,
    }),
    []
  );

  // Create a Fuse instance (use useMemo to avoid re-creating on every render)
  const fuse = useMemo(
    () => new Fuse<Article>(data, fuseOptions),
    [fuseOptions]
  );

  // If searchTerm is empty, we map each data item to a fuse-like result { item: ... }
  const results: FuseResult[] = searchTerm
    ? fuse.search(searchTerm)
    : data.map((item) => ({ item }));

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

      {/* Render our custom search results */}
      <div>
        {results.length === 0 ? (
          <p>No Results</p>
        ) : (
          results.map((res) => (
            <ArticleResult key={res.item.title} result={res} />
          ))
        )}
      </div>
    </div>
  );
};

// A component to display each article result with a bold/large title and smaller highlighted snippet
interface ArticleResultProps {
  result: FuseResult;
}

const ArticleResult: FC<ArticleResultProps> = ({ result }) => {
  const { item, matches } = result;

  return (
    <div style={{ marginBottom: "2rem" }}>
      {/* Large, bold title */}
      <Link
        to={`/ja/${item.title}`}
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        {item.title}
      </Link>

      {/* If no searchTerm (meaning no 'matches'), show nothing or show full body, etc. 
          For demonstration, let's only show snippet if we have matches. */}
      {matches ? (
        // We only care about matches on "body"
        matches
          .filter((m) => m.key === "body")
          .map((m, idx) => (
            <HighlightedSnippet key={idx} text={m.value} indices={m.indices} />
          ))
      ) : (
        // No search -> no snippet (or could display full text if you want)
        <p style={{ fontSize: "0.9rem", margin: 0 }}>
          {item.body.slice(0, 100)}...
        </p>
      )}
    </div>
  );
};

// A functional component to highlight the matched substring(s)
interface HighlightedSnippetProps {
  text: string;
  indices: [number, number][];
}

const HighlightedSnippet: FC<HighlightedSnippetProps> = ({ text, indices }) => {
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const [start, end] of indices) {
    // Push any text before this match
    if (lastIndex < start) {
      elements.push(text.slice(lastIndex, start));
    }
    // Push the matched text wrapped in <mark>
    elements.push(<mark key={start}>{text.slice(start, end + 1)}</mark>);
    lastIndex = end + 1;
  }

  // Push any remaining text after the last match
  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return <p style={{ fontSize: "0.9rem", margin: 0 }}>{elements}</p>;
};

export default Home;
