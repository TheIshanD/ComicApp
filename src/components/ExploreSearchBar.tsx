import { AutoComplete, Input } from 'antd';
import React, { useState } from 'react';
import comic from "../types/comicType"

interface myProps {
  comics: comic[],
}

const titlesToOptions = (comics: comic[]) : {value: string}[]  => {
  const options = comics.map((comic)=>{return ({value: comic.title})})
  return options
}

const ExploreSearchBar: React.FC<myProps> = (props: myProps) => {
  const { comics } = props;
  const tempOptions = titlesToOptions(comics);


  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [value, setValue] = useState('');
 
  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : tempOptions
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