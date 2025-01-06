import { useParams } from "react-router-dom";
import MarkdownComponent from "../components/Markdown";

const Article = () => {
  const { article } = useParams();
  if (!article) {
    return null;
  }
  
  return <MarkdownComponent filename={article} />;
};

export default Article;
