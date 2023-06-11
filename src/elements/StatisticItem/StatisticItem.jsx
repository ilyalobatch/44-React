import "../../assets/styles/elements/statistic-item.scss";

function StatisticItem({ icon, description, value, color }) {
  return (
    <div className="galore-statistic-item">
      <div
        className="galore-statistic-item-iconbox"
        style={{ backgroundColor: color }}
      >
        <span className="galore-statistic-item-icon">{icon}</span>
      </div>
      <div className="galore-statistic-item-info">
        <p className="galore-statistic-item-description">{description}</p>
        <p className="galore-statistic-item-value">{value}</p>
      </div>
    </div>
  );
}

export default StatisticItem;
