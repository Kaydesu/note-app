import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderColor: string;
    textColor: string;
    cardBodyColor: string;
    cardBodyShadow: string;
    modalMask: string;
    modalBodyColor: string;
    modalHeaderColor: string;
  }
}