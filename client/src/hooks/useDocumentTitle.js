import { useEffect } from "react";

function useDocumentTitle(title) {
  return useEffect(() => {
    document.title = title;

    return () => {
      document.title = "ملکینو";
    };
  }, [title]);
}

export default useDocumentTitle;
