export default function Marquee() {
  const items = ["Pure Milk Ice Cream", "No Preservatives", "Real Fruit Flavors", "Since 2015", "Bond of Purity", "Fresh Every Day", "50+ Flavors", "Natural Ingredients", "Zero Adulteration", "Ratlam M.P."];
  const doubled = [...items, ...items];
  return (
    <div className="mq-wrap" aria-hidden="true">
      <div className="mq-track">
        {doubled.map((item, i) => (
          <span key={i} className="mq-item">
            <span className="mq-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
