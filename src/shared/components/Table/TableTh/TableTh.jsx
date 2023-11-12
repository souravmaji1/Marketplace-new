import React, { memo } from "react";

const Th = ({ scope, children }) => <th scope={scope}>{children}</th>;

Th.defaultProps = {
  scope: undefined,
  children: undefined,
};

const ThMemo = memo(Th);
export { ThMemo as Th };
