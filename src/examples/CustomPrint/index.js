import * as React from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "../ComponentToPrint";

/**
 * A basic example showing how to pass a custom `print` function
 */
export const CustomPrint = () => {
  const componentRef = React.useRef(null);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "AwesomeFileName",
    print: (iframe) => {
      return new Promise((resolve) => {
        console.log("Custom printing, 1.5 second mock delay...");
        setTimeout(() => {
          console.log("Mock custom print of iframe complete", iframe);
          resolve();
        }, 1500);
      });
    },
  });

  const handleOnClick = React.useCallback(() => {
    printFn();
  }, [printFn]);

  return (
    <div>
      <h3>See console for output: print window will not open</h3>
      <button onClick={handleOnClick}>Print</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
