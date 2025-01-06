import { FC } from "react";

interface HighlightedTextProps {
  text: string;
  highlight: string;
}

const HighlightedText: FC<HighlightedTextProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const escapedHighlight = highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

  const regex = new RegExp(`(${escapedHighlight})`, "gi");

  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            style={{ backgroundColor: "yellow", padding: "0.2rem" }}
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </span>
  );
};

export default HighlightedText;
