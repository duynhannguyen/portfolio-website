import './TabBar.css';
const Tabbar = () => {
  const tabLists = [
    { title: 'About me' },
    { title: 'Cv' },
    { title: 'Education' },
  ];

  return (
    <div className="tab-bar-wrap">
      {tabLists.map((tabs, index) => (
        <div key={index} className="tab-container">
          <span>{tabs.title}</span> <span className="close-mark">&#10006;</span>
        </div>
      ))}
    </div>
  );
};

export default Tabbar;
