import { useState, useCallback } from "react";
import { useHistory, useLocation} from 'react-router-dom';

function useQueryString() {
  const location= useLocation();
  const [value, setValue] = useState(new URLSearchParams(location.search).getAll('q')[0] || '');
  const history = useHistory()
  const onSetValue = useCallback(
    newValue => {
      setValue(newValue);
      history.push(`/?q=${newValue}`)
    },
    [history]
  );
  return [value, onSetValue];
}

export default useQueryString;