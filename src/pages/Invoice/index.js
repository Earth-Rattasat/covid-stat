import React from "react";
import { useParams } from "@reach/router";

const Invoice = () => {
  const params = useParams();
  return (
    <div>
      <h1>
        Invoice
        {params.invoiceId}
      </h1>
    </div>
  );
};

export default Invoice;
