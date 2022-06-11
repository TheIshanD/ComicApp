import { Typography, Divider} from 'antd';
import React from 'react';
import CustomPageHeader from '../components/CustomPageHeader';


interface myProps {

}

const TheMission: React.FC<myProps> = (props: myProps) => {
  const { Title } = Typography;

  return (
    <div>
        <CustomPageHeader titleString={"Explore All Comic Book TLDRs!"}/>
        <div className='site-wrapper'>
          <div className="site-layout-content transition">
            
            <Divider />

          </div>
        </div>
    </div>
  );
}

export default TheMission;