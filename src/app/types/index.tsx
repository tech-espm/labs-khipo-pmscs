import { MouseEventHandler } from "react";

export interface CustomButtomProps{
    title: string;
    containerStyle?: string;
    handleclick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit" ;
}