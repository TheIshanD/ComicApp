import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comic from "../types/comicType"

interface myProps {
  comics: Comic[],
  defaultVal: string,
}

const titlesToOptions = (comics: Comic[]) : {value: string}[]  => {
  const options = comics.map((comic)=>{return ({value: comic.title})})
  return options
}

const ExploreSearchBar: React.FC<myProps> = (props: myProps) => {
  const { comics, defaultVal } = props;

  const tempOptions = titlesToOptions(comics);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [value, setValue] = useState<string>('');
  const [focused, setFocused] = useState<boolean>(false);

  const navigate = useNavigate();

  // tempOptions.unshift({ value: value.concat(" -search")})

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : tempOptions,
    );
  };

  const onSelect = (value: string) => {

  };

  const onChange = (data: string) => {
    setValue(data);
  };

  const search = (value: string) => {
    navigate("/explore", { state: { value }})
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
        defaultValue={defaultVal}
        dropdownMatchSelectWidth={false}
        open={false}
      >
        <Input.Search size="large" placeholder="Search for your Favorite Comic Book" enterButton onSearch={()=>{search(value)}}/>
      </AutoComplete>
  );
}

export default ExploreSearchBar;