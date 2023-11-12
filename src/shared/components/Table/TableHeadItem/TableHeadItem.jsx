import React, { memo } from "react";
import { Icon } from "Components/Icons";
import { Th } from "Components/Table";

import classes from "./tableHeadItem.module.css";

const TableHeadItem = ({
  displayName,
  column,
  sortBy,
  canSort,
  action,
  onClick,
}) => (
  <Th>
    <span
      className={`${classes.thSpan} ${!canSort ? classes.canSort : ""} ${
        action ? classes.action : ""
      }`}
      role="button"
      tabIndex={-1}
      onClick={onClick}
      onKeyUp={onClick}
    >
      {displayName}
      {/* {canSort &&
        (sortBy === column ? (
          <Icon className={classes.sortIcon} type="caretup" />
        ) : (
          <Icon className={classes.sortIcon} type="caretdown" />
        ))} */}
    </span>
  </Th>
);

const TableHeadItemMemo = memo(TableHeadItem);

export { TableHeadItemMemo as TableHeadItem };
