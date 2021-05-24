export const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      marginBottom: "10px",
      padding: "20px",
      color: "#303238",
      fontSize: "16px",
      fontFamily: "sans-serif",
      backgroundColor: "white",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "var(--nice-blue)",
      },
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};
