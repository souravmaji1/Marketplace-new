import React, { ReactNode, FC } from "react";

// import { areEqual } from "Utils/equalityChecks";
import { TableCaption } from "./TableCaption";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { TableFooter } from "./TableFooter";
import { TableRow } from "./TableRow";
import { TableColumn } from "./TableColumn";
import { Th } from "./TableTh";

export const Table = ({ className, children }) => (
  <table className={className}>{children}</table>
);

Table.Caption = TableCaption;
Table.Header = TableHeader;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = TableRow;
Table.Column = TableColumn;
Table.Th = Th;

Table.defaultProps = {
  className: undefined,
};

// const TableMemo = memo(Table, areEqual) as typeof Table;
// const MemoizedComponent = React.memo(innerComponent) as typeof innerComponent;
// export { TableMemo as Table };
