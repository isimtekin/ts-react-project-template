import styled from 'styled-components';
import { applyGridResponsiveStyle } from './grid-responsive';
import { AppTheme } from 'common/theme/Theme';

export const gridConfig = {
    gutter: 8, // 16
};

export interface GridProps
    extends PartialRecord<GridBreakpoints, number | 'hidden'> {
    children?: JSX.Element | JSX.Element[] | string | boolean;
    fluid?: boolean;
    container?: boolean;
    row?: boolean;
    item?: boolean;
    align?: GridAlignment;
    justify?: GridJustification | string;
    alignContent?: GridContentAlignment;
    alignItems?: GridItemsAlignment;
    direction?: GridDirection;
    size?: PartialRecord<GridBreakpoints, Omit<GridSize, 'auto'>>;
    className?: string;
    between?: boolean;
}

const GridStyled = styled.div`
    ${(props: GridProps) =>
        props.fluid &&
        `   margin: 0 auto;
        padding: 0 ${gridConfig.gutter}px;
        width: 100%;
       
        .grid-row {
            margin: 0 -${gridConfig.gutter}px;
            display: flex; 
            flex-wrap: wrap;
            box-sizing: border-box;
            ${props.between ? 'justify-content: space-between;' : ''}
        }`}

    ${(props: GridProps) =>
        props.container &&
        `   margin: 0 auto;
            padding: 0 ${gridConfig.gutter}px;
           
            .grid-row {
                margin: 0 -${gridConfig.gutter}px;
                display: flex; 
                flex-wrap: wrap;
                box-sizing: border-box;

                ${props.between ? 'justify-content: space-between;' : ''}
            }`}

    ${(props: GridProps) =>
        props.row &&
        `    margin: 0 -${gridConfig.gutter}px;
            display: flex; x
            flex-wrap: wrap;
            box-sizing: border-box;`}     

    ${(props: GridProps) =>
        props.item && 'display: flex; box-sizing: border-box;'}
        
                
    ${(props: GridProps) =>
        props.alignItems && `align-items: ${props.alignItems};`}
    
    ${(props: GridProps) => {
        let style = '';
        switch (props.align) {
            case 'left':
                style = `
                    justify-content: flex-start;
                `;
                break;
            case 'right':
                style = `
                    justify-content: flex-end;
                    
                `;
                break;
            case 'center':
                style = `
                    justify-content: center;
                `;
                break;
        }
        return style;
    }}
        
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
