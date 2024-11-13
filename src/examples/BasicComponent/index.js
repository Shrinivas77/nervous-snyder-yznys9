import * as React from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "../ComponentToPrint";

/**
 * A basic printing example printing a component
 */
export const BasicComponent = () => {
  const componentRef = React.useRef(null);

  const handleAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called");
  }, []);

  const handleBeforePrint = React.useCallback(() => {
    console.log("`onBeforePrint` called");
    return Promise.resolve();
  }, []);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    onAfterPrint: handleAfterPrint,
    onBeforePrint: handleBeforePrint,
  });

  return (
    <div>
      <button onClick={printFn}>Print</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
