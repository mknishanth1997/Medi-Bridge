import './Header.css';
export function Header() {
  return (
    <>
      <div className="header">
        <div className="left">
          <h1>Logo</h1>
        </div>
        <div className="right">
          <ul>
            <li>link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </div>
      </div>
    </>
  );
}
