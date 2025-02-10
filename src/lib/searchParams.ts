const searchParamsUtils = ()=>{
  const params = new URLSearchParams(window.location.search);
  return {
    updateSearchParam: (key: string, value: string) => {
      params.set(key, value);
      window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
    },
  
    removeSearchParam: (key: string) => {
       params.delete(key);
      window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
    },
  
    resetSearchParams: () => {
      window.history.replaceState({}, "", `${window.location.pathname}?`);
    },
  
    getAllSearchParams: () => {
       const paramsObject: Record<string, string> = {};
  
      params.forEach((value, key) => {
        paramsObject[key] = value;
      });
  
      return paramsObject;
    }
  };
};

export default searchParamsUtils;