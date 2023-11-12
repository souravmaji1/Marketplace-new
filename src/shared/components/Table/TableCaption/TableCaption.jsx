import React, { memo } from "react";

const TableCaption = ({ children }) => <caption>{children}</caption>;
const TableCaptionMemo = memo(TableCaption);
export { TableCaptionMemo as TableCaption };
