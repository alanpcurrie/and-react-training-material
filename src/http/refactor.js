import { useEffect, useRef, useReducer } from "react";

export const useFetch = (url) => {
  const cache = useRef({});

  const initialState = {
    status: "idle",
    error: null,
    data: []
  };



  const reducerMap = {
    FETCHING: (state, action) => ({
      ...initialState,
      ...state,
      status: "fetching",
      data: action.payload
    }),
    FETCHED: (state, action) => ({
      ...initialState,
      ...state,
      status: "fetched",
      data: action.payload
    }),
    FETCH_ERROR: (state, action) => ({
      ...initialState,
      ...state,
      status: "error",
      error: action.payload
    })
  };

  const [state, dispatch] = useReducer(
    (state, action) => reducerMap[action.type](state, action),
    initialState
  );

  useEffect(() => {
    let cancelRequest = false;
    if (!url || !url.trim()) return;

    const fetchData = async () => {
      dispatch({ type: "FETCHING" });
      if (cache.current[url]) {
        const data = cache.current[url];
        dispatch({ type: "FETCHED", payload: data });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelRequest) return;
          dispatch({ type: "FETCHED", payload: data });
        } catch (error) {
          if (cancelRequest) return;
          dispatch({ type: "FETCH_ERROR", payload: error.message });
        }
      }
    };

    fetchData();

    return function cleanup() {
      cancelRequest = true;
    };
  }, [url]);

  return { state };
};
