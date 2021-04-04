import { AppTheme, responsive } from 'common/theme/Theme';
import { SimpleInterpolation } from 'styled-components';
import { gridConfig, GridProps } from './Grid';

export function applyGridResponsiveStyle(props: GridProps & AppTheme) {
    let styles: SimpleInterpolation[] = [];

    if (props.container) {
        styles = styles.concat([
            responsive('tablet')`width: ${props.theme.breakpoints?.tablet}px;`,
            responsive(
                'desktop'
            )`width: ${props.theme.breakpoints?.desktop}px;`,
        ]);
    }

    if (props.item) {
        styles = styles.concat([
            `
            padding: 0 ${gridConfig.gutter}px;
        `,
        ]);
        if (props.size) {
            for (const [key, value] of Object.entries(props.size)) {
                if (value && typeof value === 'number') {
                    const val: number = 12 / value;
                    styles = styles.concat(
                        responsive(key as GridBreakpoints)`width: calc(100% / ${
                            12 / val
                        });`
                    );
                }
            }
        }

        if (props.desktop) {
            styles = styles.concat(
                responsive('desktop')`width: calc(100% / ${
                    12 / props.desktop
                });`
            );
        }

        if (props.tablet) {
            styles = [
                ...responsive('tablet')`
            width: calc(100% / ${12 / props.tablet});
          `,
            ];
        }

        if (props.mobile) {
            styles = [
                ...responsive('mobile')`
            width: calc(100% / ${12 / props.mobile});
          `,
            ];
        }

        if (!props.desktop && !props.tablet && !props.mobile && !props.size) {
            styles = styles.concat([`flex:1;`]);
        }
    }

    return styles;
}
