import * as React from "react";
import { useReactToPrint } from "react-to-print";

import { ComponentToPrint } from "../ComponentToPrint";

/**
 * Print with copyShadowRootContent option
 */
export const CopyShadowRootContent = () => {
  const componentRef = React.useRef(null);

  const handleOnAfterPrint = React.useCallback(() => {
    console.log("`onAfterPrint` called"); // tslint:disable-line no-console
  }, []);

  const printFn = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "WithCopiedShadowRoot",
    onAfterPrint: handleOnAfterPrint,
    copyShadowRoots: true,
  });

  const handleOnClick = React.useCallback(() => {
    printFn();
  }, [printFn]);

  return (
    <div>
      <button onClick={handleOnClick}>Print</button>
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
