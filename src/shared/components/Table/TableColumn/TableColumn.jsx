import React, { memo } from "react";

const TableColumn = ({
  dataId,
  children,
  className,
  tdClassName,
  onClick,
  tdOnClick,
}) => (
  /* eslint-disable-next-line */
  <td
    className={tdClassName}
    role="button"
    data-id={dataId}
    onClick={tdOnClick}
    onKeyUp={tdOnClick}
  >
    <div
      className={className}
      role="button"
      data-id={dataId}
      onClick={onClick}
      onKeyUp={onClick}
      tabIndex={0}
    >
      {children}
    </div>
  </td>
);

TableColumn.defaultProps = {
  dataId: null,
  onClick: null,
  tdOnClick: null,
  className: undefined,
  tdClassName: undefined,
};

const TableColumnMemo = memo(TableColumn);
export { TableColumnMemo as TableColumn };
