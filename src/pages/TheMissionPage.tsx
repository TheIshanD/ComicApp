import { Typography, Divider} from 'antd';
import React from 'react';
import CustomPageHeader from '../components/CustomPageHeader';


interface myProps {

}

const TheMission: React.FC<myProps> = (props: myProps) => {
  const { Text } = Typography;

  return (
    <div>
        <CustomPageHeader titleString={"Join The Misison!"}/>
        <div className='site-wrapper'>
          <div className="site-layout-content transition">
            
          <Text className='tldrText'>
            We founded TLDR to share their passion for comic books to other people.
            We recognized the barrier to entry to reading comic books was abnormally high and
            at times very confusing.
            TLDR is a mechanism for comic book readers to fully understand comics quickly. If you have
            any reocmmended comics we should add, please place them here. IF you want to add a summary, you
            can do so here. If you want to join our team, you can do so here. Thank you!
          </Text>

          </div>
        </div>
    </div>
  );
}

export default TheMission;