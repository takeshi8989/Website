import { Link } from "react-router-dom";
import data from "../../data/index.json";
import Fuse from "fuse.js";
import { useMemo, useState } from "react";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  // Configure Fuse.js options
  const fuseOptions = {
    keys: ["title", "body"], // which fields to search in
    includeMatches: true,
    threshold: 0.3, // how fuzzy the match should be (0 = exact, 1 = very fuzzy)
  };

  // Create a Fuse instance (use useMemo so we don't re-instantiate on every render)
  const fuse = useMemo(() => new Fuse(data, fuseOptions), [data]);
  const results = searchTerm
    ? fuse.search(searchTerm)
    : data.map((item) => ({ item }));

  console.log(results);

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
        {Array.isArray(results) ? (
          <SearchResults results={results} />
        ) : (
          <p>No Results</p>
        )}
      </ul>
    </div>
  );
};

function SearchResults({ results }) {
  return (
    <ul>
      {results.map((res) => {
        // If it's from fuse.search(), it has { item, matches }
        // If it's the fallback for empty searchTerm, it’s just an object like { item: dataItem }
        const { item, matches } = res;
        if (!matches) {
          // No fuzzy search performed, just show the title
          return (
            <li key={item.title}>
              <h4>{item.title}</h4>
              {/* Maybe no snippet if no searchTerm */}
            </li>
          );
        }

        // We do have matches
        const matchedLines = matches
          .filter((m) => m.key === "body")
          .map((m) => ({
            lineIndex: m.arrayIndex,
            lineValue: m.value,
            indices: m.indices,
          }));

        // Deduplicate lines if needed
        const uniqueMatchesByLine = Array.from(
          new Map(matchedLines.map((l) => [l.lineIndex, l])).values()
        );

        return (
          <li key={item.title}>
            <h4>{item.title}</h4>
            {uniqueMatchesByLine.map((match) => (
              <div key={match.lineIndex}>
                {highlightMatch(match.lineValue, match.indices)}
              </div>
            ))}
          </li>
        );
      })}
    </ul>
  );
}

function highlightMatch(line, indicesArray) {
  // same logic as above
  let elements = [];
  let lastIndex = 0;

  for (const [start, end] of indicesArray) {
    if (lastIndex < start) {
      elements.push(line.slice(lastIndex, start));
    }
    elements.push(<mark key={start}>{line.slice(start, end + 1)}</mark>);
    lastIndex = end + 1;
  }
  if (lastIndex < line.length) {
    elements.push(line.slice(lastIndex));
  }

  return <>{elements}</>;
}

export default Home;
