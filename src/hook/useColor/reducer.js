export default function reducer(state, action) {
  const limitRgb = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  const step = 20;
  console.log("reducer");
  switch (action.type) {
    case "inc_R":
      return {
        ...state,
        r: limitRgb(state.r + step),
      };
    case "dec_R":
      return {
        ...state,
        r: limitRgb(state.r - step),
      };
    case "inc_G":
      return {
        ...state,
        g: limitRgb(state.g + step),
      };
    case "dec_G":
      return {
        ...state,
        g: limitRgb(state.g - step),
      };
    case "inc_B":
      return {
        ...state,
        b: limitRgb(state.b + step),
      };
    case "dec_B":
      return {
        ...state,
        b: limitRgb(state.b - step),
      };

    default:
      return state;
  }
}
