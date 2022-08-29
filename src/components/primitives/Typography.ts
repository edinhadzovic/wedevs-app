import React, { ReactHTML } from "react";

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
    variant: keyof ReactHTML;
}


export const Typography: React.FC<ITypographyProps> = 
    ({variant, ...props}) => React.createElement(variant, props, "Typography");
