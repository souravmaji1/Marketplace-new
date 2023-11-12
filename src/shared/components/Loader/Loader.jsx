import React, { useId } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import BarLoader from "react-spinners/BarLoader";
import BeatLoader from "react-spinners/BeatLoader";
import BounceLoader from "react-spinners/BounceLoader";
import CircleLoader from "react-spinners/CircleLoader";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import ClipLoader from "react-spinners/ClipLoader";
import ClockLoader from "react-spinners/ClockLoader";
import DotLoader from "react-spinners/DotLoader";
import FadeLoader from "react-spinners/FadeLoader";
import GridLoader from "react-spinners/GridLoader";
import HashLoader from "react-spinners/HashLoader";
import PacmanLoader from "react-spinners/PacmanLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import PuffLoader from "react-spinners/PuffLoader";
import PulseLoader from "react-spinners/PulseLoader";
import RingLoader from "react-spinners/RingLoader";
import RiseLoader from "react-spinners/RiseLoader";
import RotateLoader from "react-spinners/RotateLoader";
import ScaleLoader from "react-spinners/ScaleLoader";
import SkewLoader from "react-spinners/SkewLoader";
import SquareLoader from "react-spinners/SquareLoader";
import SyncLoader from "react-spinners/SyncLoader";

const override = {
  // display: "block",
  // margin: "0 auto",
  borderColor: "red",
};

export const Loader = ({ className, size, color, type }) => {
  const id = useId();

  switch (type) {
    case "moon":
      return (
        <MoonLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "circle":
      return (
        <circleLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Bar":
      return (
        <BarLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Beat":
      return (
        <BeatLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Bounce":
      return (
        <BounceLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Circle":
      return (
        <CircleLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "ClimbingBox":
      return (
        <ClimbingBoxLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Clip":
      return (
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Clock":
      return (
        <ClockLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Dot":
      return (
        <DotLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Fade":
      return (
        <FadeLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Grid":
      return (
        <GridLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Hash":
      return (
        <HashLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Pacman":
      return (
        <PacmanLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Propagate":
      return (
        <PropagateLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Puff":
      return (
        <PuffLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Pulse":
      return (
        <PulseLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Ring":
      return (
        <RingLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Rise":
      return (
        <RiseLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Rotate":
      return (
        <RotateLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Scale":
      return (
        <ScaleLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Skew":
      return (
        <SkewLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Square":
      return (
        <SquareLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
    case "Sync":
      return (
        <SyncLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          // aria-label="Loading Spinner"
          data-testid={id}
        />
      );
  }
};

Loader.defaultProps = {
  className: "",
  size: 20,
  color: "#ffffff",
  type: "moon",
};
Loader.prototype = {
  type:
    "moon" |
    "circle" |
    "Bar" |
    "Beat" |
    "Bounce" |
    "Circle" |
    "ClimbingBox" |
    "Clip" |
    "Clock" |
    "Dot" |
    "Fade" |
    "Grid" |
    "Hash" |
    "Pacman" |
    "Propagate" |
    "Puff" |
    "Pulse" |
    "Ring" |
    "Rise" |
    "Rotate" |
    "Scale" |
    "Skew" |
    "Square" |
    "Sync",
};
