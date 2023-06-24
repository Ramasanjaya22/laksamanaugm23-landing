import { jsx as _jsx } from "react/jsx-runtime";
import { addPropertyControls, ControlType } from "framer";
/**
 * Noise
 * @framerIntrinsicWidth 200
 * @framerIntrinsicHeight 200
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight fixed
 */ export default function Noise(props) {
  const { opacity, backgroundSize, borderRadius } = props;
  return /*#__PURE__*/ _jsx("div", {
    style: { ...containerStyle, opacity, backgroundSize, borderRadius },
  });
}
Noise.defaultProps = { opacity: 0.5, backgroundSize: 128, radius: 0 };
addPropertyControls(Noise, {
  backgroundSize: {
    title: "Size",
    type: ControlType.Number,
    min: 64,
    max: 256,
  },
  opacity: {
    title: "Opacity",
    type: ControlType.Number,
    step: 0.1,
    displayStepper: true,
    max: 1,
    min: 0,
  },
  borderRadius: {
    title: "Radius",
    type: ControlType.Number,
    min: 0,
    max: 1e3,
    step: 1,
    displayStepper: true,
  },
});
const containerStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "256px 256px",
  backgroundRepeat: "repeat",
  backgroundImage:
    "url('https://framerusercontent.com/images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png')",
};
export const __FramerMetadata__ = {
  exports: {
    default: {
      type: "reactComponent",
      name: "Noise",
      slots: [],
      annotations: {
        framerDisableUnlink: "*",
        framerContractVersion: "1",
        framerIntrinsicWidth: "200",
        framerIntrinsicHeight: "200",
        framerSupportedLayoutWidth: "fixed",
        framerSupportedLayoutHeight: "fixed",
      },
    },
    __FramerMetadata__: { type: "variable" },
  },
};
//# sourceMappingURL=./Noise.map
