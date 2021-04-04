import MUIGrid from '@material-ui/core/Grid';
import MUIBox from '@material-ui/core/Box';
import MUIHidden from '@material-ui/core/Hidden';
import styled from 'styled-components';

import { applyGridResponsiveStyle } from './grid-responsive';
import { AppTheme } from 'common/theme/Theme';

export const gridConfig = {
    gutter: 8, // 16
};

export interface GridProps extends PartialRecord<GridBreakpoints, number> {
    children?: JSX.Element | JSX.Element[] | string | boolean;
    fluid?: boolean;
    container?: boolean;
    row?: boolean;
    item?: boolean;
    justify?: GridJustification | string;
    alignContent?: GridContentAlignment;
    alignItems?: GridItemsAlignment;
    direction?: GridDirection;
    size?: PartialRecord<GridBreakpoints, Omit<GridSize, 'auto'>>;
    className?: string;
}

const GridStyled = styled.div`
    ${(props: any) =>
        props.fluid &&
        `   margin: 0 auto;
        padding: 0 ${gridConfig.gutter}px;
        width: 100%;
       
        .grid-row {
            margin: 0 -${gridConfig.gutter}px;
            display: flex; 
            flex-wrap: wrap;
            box-sizing: border-box;
        }`}

    ${(props: any) =>
        props.container &&
        `   margin: 0 auto;
            padding: 0 ${gridConfig.gutter}px;
           
            .grid-row {
                margin: 0 -${gridConfig.gutter}px;
                display: flex; 
                flex-wrap: wrap;
                box-sizing: border-box;
            }`}

    ${(props: GridProps) =>
        props.row &&
        `    margin: 0 -${gridConfig.gutter}px;
            display: flex; x
            flex-wrap: wrap;
            box-sizing: border-box;`}     

    ${(props: GridProps) => props.item && 'box-sizing: border-box;'}
    
    ${(props: GridProps) =>
        props.justify && `justify-content: ${props.justify};`}
           
    ${(props: GridProps) =>
        props.alignContent && `align-content: ${props.alignContent};`}
                
    ${(props: GridProps) =>
        props.alignItems && `align-items: ${props.alignItems};`}
        
    ${(props: GridProps & AppTheme) => applyGridResponsiveStyle(props)}
`;

export function Grid({ children, className = '', ...restProps }: GridProps) {
    return (
        <GridStyled className={className} {...restProps}>
            {restProps.container || restProps.fluid ? (
                <div className="grid-row">{children}</div>
            ) : (
                children
            )}
        </GridStyled>
    );
}

export const GridA = MUIGrid;
export const Box = MUIBox;
export const Hidden = MUIHidden;
