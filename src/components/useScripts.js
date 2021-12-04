import { useEffect } from 'react';

const useScript = (url, is_async=true) => {
  useEffect(() => {
    const script = document.createElement('script');
    console.log(url);
    script.src = url;
    script.async = is_async;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
