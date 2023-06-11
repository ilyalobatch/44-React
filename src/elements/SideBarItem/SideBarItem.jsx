import "../../assets/styles/elements/sidebar-item.scss";

function SideBarItem({ icon, text }) {
  return (
    <div className="galore-sidebar-item">
      <span className="galore-sidebar-icon">{icon}</span>
      <span className="galore-sidebar-text">{text}</span>
    </div>
  );
}

export default SideBarItem;
