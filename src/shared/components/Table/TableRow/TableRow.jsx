import React, { memo } from "react";

const TableRow = ({ dataId, children, onClick }) => (
  <tr data-id={dataId} onClick={onClick}>
    {children}
  </tr>
);

TableRow.defaultProps = {
  dataId: null,
  onClick: null,
};

const TableRowMemo = memo(TableRow);
export { TableRowMemo as TableRow };
