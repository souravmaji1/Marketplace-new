import React, { memo, ReactNode } from "react";

const TableFooter = ({ children }) => <tfoot>{children}</tfoot>;

const TableFooterMemo = memo(TableFooter);
export { TableFooterMemo as TableFooter };
