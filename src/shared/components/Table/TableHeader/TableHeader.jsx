import React, { memo } from "react";

const TableHeader = ({ children }) => <thead>{children}</thead>;

const TableHeaderMemo = memo(TableHeader);
export { TableHeaderMemo as TableHeader };
