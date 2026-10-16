// Heading whose words sit in overflow masks so GSAP can raise them line by line.
// The text stays real, selectable and readable without JavaScript.
export default function SplitHeading({ as: Tag = "h2", lines, className, hero = false, id, lineClasses = [] }) {
  const list = Array.isArray(lines) ? lines : [lines];
  return (
    <Tag className={`split-host ${className || ""}`} data-split="" data-hero-item={hero ? "" : undefined} id={id}>
      {list.map((line, i) => [
        i > 0 ? " " : null,
        <span key={i} className={lineClasses[i]} style={{ display: "block" }}>
          {line.split(" ").map((word, j, arr) => (
            <span key={j}>
              <span className="split-line">
                <span className="split-word">{word}</span>
              </span>
              {j < arr.length - 1 ? " " : null}
            </span>
          ))}
        </span>,
      ])}
    </Tag>
  );
}
