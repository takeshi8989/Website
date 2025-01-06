import os
import json
import frontmatter

DATA_DIR = "frontend/data"
OUTPUT_FILE = "frontend/data/index.json"


def main():
    results = []

    # List all .md files in the data folder
    for filename in os.listdir(DATA_DIR):
        if filename.endswith(".md"):
            filepath = os.path.join(DATA_DIR, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                # Load front matter + body
                post = frontmatter.load(f)
                metadata = post.metadata
                body = post.content

                # Build a dictionary to represent this file’s data
                result_item = {
                    "title": filename.replace(".md", ""),
                    **metadata,  # e.g. title, date, tags from YAML frontmatter
                    "body": body,  # the main Markdown content
                }
                results.append(result_item)

    # Write all extracted data to data.json
    with open(OUTPUT_FILE, "w", encoding="utf-8") as out:
        json.dump(results, out, ensure_ascii=False, indent=2)

    print(f"Updated {OUTPUT_FILE} with {len(results)} items.")


if __name__ == "__main__":
    main()
