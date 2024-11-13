import * as React from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "../ComponentToPrint";

export const LazyContent = () => {
  const componentRef = React.useRef(null);

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handlePrint = useReactToPrint({
    documentTitle: "SuperFileName",
  });

  return (
    <div>
      <button onClick={() => handlePrint(reactToPrintContent)}>Print</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
