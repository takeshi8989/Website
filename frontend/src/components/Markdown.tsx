import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownComponentProps {
  filename: string;
}

const MarkdownComponent = ({ filename }: MarkdownComponentProps) => {
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    import(`../../data/${filename}.md?raw`)
      .then((content) => {
        setContent(content.default);
      })
      .catch(() => {
        setContent("File not found");
      });
  }, []);

  return (
    <div>
      {/* This will render the Markdown content */}
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownComponent;
