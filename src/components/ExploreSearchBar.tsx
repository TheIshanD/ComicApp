import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';
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
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  // tempOptions.unshift({ value: value.concat(" -search")})

  const onSearch = (searchText: string) => {
    setOptions(
      tempOptions
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
        onFocus={()=>{setFocused(true)}}
        onBlur={()=>{setFocused(false)}}
        backfill={true}
      >
        <Input.Search size="large" placeholder="Search for your Favorite Comic Book" enterButton onSearch={()=>{search(value)}}/>
      </AutoComplete>
  );
}

export default ExploreSearchBar;