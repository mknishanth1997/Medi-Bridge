import './RevenuePageHeader.css';
import { CiFilter } from 'react-icons/ci';
import { PiExportFill } from 'react-icons/pi';
export function RevenuePageHeader() {
  return (
    <>
      <div className="revenue-page-header">
        <div className="revenue-page-header-left">
          <h1>Revenue Analysis</h1>
          <p>Your Total Sales and Revenue Generated statistics and Report.</p>
        </div>
        <div className="revenue-page-header-right">
          <button className="btn-with-icon">
            <CiFilter size={24} className="btn-icon"></CiFilter>
            <span className="btn-text">{'Filter by'}</span>
          </button>
          <button className="btn-with-icon">
            <PiExportFill size={24}></PiExportFill>
            <span className="btn-text">{'Export'}</span>
          </button>
        </div>
      </div>
    </>
  );
}
