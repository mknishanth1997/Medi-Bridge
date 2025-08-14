import PaymentModeRevenueChart from './Pie2/pie2';
import RevenueChart from './Revenue-components/ChartLineComp/ChartLined';
import AgeGroupRevenueChart from './Revenue-components/Pie1/RenderCustomizedTable';
import { RevenuePageHeader } from './Revenue-components/Revenue-page-header/RevenuePageHeader';
import SalesCard from './Revenue-components/salesCard/salesCard';
import './RevenueAnalysis.css';

export function RevenueAnalysis() {
  return (
    <>
      <div className="revenu-analysis-main-container">
        <RevenuePageHeader></RevenuePageHeader>
        <div className="rascwjkjfd">
          <SalesCard></SalesCard>
          <SalesCard></SalesCard>
          <SalesCard></SalesCard>
          <SalesCard></SalesCard>
        </div>
        <div className="piechartwholecontainerman">
          <div className="mainonebrochart">
            <div className="textingtexginbro">
              <p>Total Revenue</p>
              <h1>10000 Rs</h1>
              <div className="sales-amount">
                Last 30 days <span className="trend">⬆ +12%</span>
              </div>
            </div>
            <div className="chartingmain">
              {' '}
              <RevenueChart />
            </div>
          </div>
          <div className="sideoneeee">
            <AgeGroupRevenueChart></AgeGroupRevenueChart>
          </div>
          <div className="sidetwoooo">
            <PaymentModeRevenueChart></PaymentModeRevenueChart>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
