import React, { memo } from "react";

const Table = ({ className, children }) => (
  <table className={className}>{children}</table>
);

Table.defaultProps = {
  className: undefined,
};

const TableMemo = memo(Table);

export { TableMemo as Table };
