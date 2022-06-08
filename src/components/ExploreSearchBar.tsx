import { AutoComplete, Input } from 'antd';
import React, { useState } from 'react';

const ExploreSearchBar: React.FC = () => {
  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [value, setValue] = useState('');
 
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : [{value: "bruh"}, {value: "bruh moment"}, {value: "BRUH"}],
    );
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const search = (value: string) => {
    console.log("SEARCH UP NOW", value) // Replace with a searching action
  }

  return (
      <AutoComplete 
        options={options}
        style={{ width: 800 }}
        onSelect={onSelect}
        onSearch={onSearch}
        filterOption={true}
        onChange={onChange}
      >
        <Input.Search size="large" placeholder="Search for your Favorite Comic Book" enterButton onSearch={()=>{search(value)}}/>
      </AutoComplete>
  );
}

export default ExploreSearchBar;