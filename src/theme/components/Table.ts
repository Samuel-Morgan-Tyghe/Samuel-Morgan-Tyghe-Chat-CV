import { type ComponentStyleConfig } from "@chakra-ui/react";

import { pxToEm } from "../../Utils/pxToEm";
import { pxToRem } from "../../Utils/pxToRem";

export const Table: ComponentStyleConfig = {
  variants: {
    wysiwyg: {
      th: {
        fontSize: pxToEm(20),
        borderBottom: "4px groove",
        fontWeight: "350",
        textTransform: "none",
        px: "20px",
        py: "20px",
        p: {
          fontWeight: "inherit",
          mb: 0,
        },
      },
      td: {
        borderBottom: "1px solid",
        borderColor: "primary.grey.80",
        px: "20px",
        py: "20px",
        p: {
          fontSize: pxToEm(16),
          mb: 0,
        },
      },
      tr: {
        "&:last-of-type": {
          td: {
            borderColor: "transparent",
          },
        },
      },
    },

    documents: {
      thead: {
        backgroundColor: "primary.darkGreen.100",
        th: {
          color: "primary.white.100",
          fontSize: {
            base: pxToEm(18),
            lg: pxToEm(20),
          },
          fontWeight: "350",
          textTransform: "none",
          py: {
            base: "20px",
            lg: "40px",
          },
          px: "30px",
          minWidth: "200px",

          "&:first-of-type": {
            borderTopLeftRadius: "2px",
          },

          "&:last-child": {
            borderTopRightRadius: "2px",
          },
        },
      },
      tbody: {
        tr: {
          "&:last-child": {
            td: {
              borderBottomWidth: "1px",

              "&:first-of-type": {
                borderBottomLeftRadius: "2px",
              },

              "&:last-child": {
                borderBottomRightRadius: "2px",
              },
            },
          },
        },
        td: {
          color: "primary.teal.100",
          fontSize: pxToRem(14),
          px: "30px",
          borderColor: "primary.grey.80",
          py: {
            base: "20px",
            lg: "30px",
          },
          p: {
            fontWeight: "325",
            fontSize: "inherit",
            lineHeight: pxToRem(22.5),
          },

          a: {
            fontWeight: "400",
            textDecoration: "underline",

            "&:hover": {
              color: "primary.teal.60",
            },

            "&:focus": {
              color: "primary.teal.60",
            },
          },

          "&:first-of-type": {
            borderLeftWidth: "1px",
          },

          "&:last-child": {
            borderRightWidth: "1px",
          },
        },
      },
    },
  },
};
