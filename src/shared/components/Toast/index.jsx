import SuccesIcon from "Root/assets/toasts/succesIcon";
import { GetIcon } from "Root/utils/general";
import React from "react";
import { useSelector } from "react-redux";

const Toast = () => {
  const {
    toastData: { icon, toastMessage, openToast },
  } = useSelector((state) => state.uiSlice);
  const Icon = GetIcon(icon);
  return (
    <div
      id="toast-top-right"
      class={`${
        openToast ? "flex" : "hidden"
      } fixed items-center p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800 z-50`}
      role="alert"
    >
      <Icon />
      <div class="ml-3 text-sm font-normal">{toastMessage}</div>
      <button
        type="button"
        class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-top-right"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Toast;
