import axios from "axios";
import { useEffect, useState } from "react";

export const useDataSource = <T,>(getResourceFn: Function): T | undefined => {
  const [resource, setResource] = useState<T>();

  useEffect(() => {
    (async (): Promise<void> => {
      const result = await getResourceFn();
      setResource(result);
    })();
  }, [getResourceFn]);

  return resource;
}

export function useResource <T>(url: string): T | undefined {
  const [resource, setResource] = useState<T>();

  function AbortSignal (timeoutS: number = 10): AbortSignal {
    const abortController: AbortController = new AbortController();
    setTimeout(() => abortController.abort(), timeoutS * 1000);
    return abortController.signal;
  }

  async function getAxios (url: string): Promise<void> {
    try {
      const response = await axios.get(url, {
        signal: AbortSignal()
      })
      const { data } = response;
      setResource(data);
    } catch(err) {
      // @TODO: handle Errors
      console.log(err);
    }
  }

  useEffect(() => { getAxios(url) }, [])

  return resource;
}