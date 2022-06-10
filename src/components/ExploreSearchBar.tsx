import { AutoComplete, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Comic from "../types/comicType"

interface myProps {
  comics: Comic[],
  defaultVal: string,
  placeholder: string,
}

const titlesToOptions = (comics: Comic[]) : {value: string}[]  => {
  const options = comics.map((comic)=>{return ({value: comic.title})})
  return options
}

const ExploreSearchBar: React.FC<myProps> = (props: myProps) => {
  const { comics, defaultVal, placeholder } = props;

  const tempOptions = titlesToOptions(comics);

  const [options, setOptions] = useState<{ value: string }[]>([]);
  const [value, setValue] = useState<string>(defaultVal);

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
    // defaultVal = data;
  };

  const search = (value: string) => {
    navigate("/explore", { state: { value }})
  }

  const onFocus = () => {
    var element = document.getElementById("comicSearcher")
    if(element != null) {
      element.classList.toggle("searchBar")
      element.classList.toggle("searchBarFocused")
    }
  }

  const onBlur = () => {
    const element = document.getElementById("comicSearcher")
    if(element != null) {
      element.classList.toggle("searchBar")
      element.classList.toggle("searchBarFocused")
    }
  }

  return (
    <div
    id='comicSearcher'
        className="searchBar transition"
        >
      <AutoComplete 
        options={options}
        style={{ width: "100%" }}
        onSelect={onSelect}
        onSearch={onSearch}
        filterOption={true}
        onChange={onChange}
        defaultValue={defaultVal}
        onFocus={()=>{onFocus()}}
        onBlur={()=>{onBlur()}}
        dropdownMatchSelectWidth={false}
        open={false}
      >
        <Input.Search size="large" placeholder={placeholder} enterButton onSearch={()=>{search(value)}}/>
      </AutoComplete>
      </div>
  );
}

export default ExploreSearchBar;