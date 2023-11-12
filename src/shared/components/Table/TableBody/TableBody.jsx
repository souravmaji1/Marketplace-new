import React, { memo } from "react";

const TableBody = ({ children }) => <tbody>{children}</tbody>;

const TableBodyMemo = memo(TableBody);
export { TableBodyMemo as TableBody };
