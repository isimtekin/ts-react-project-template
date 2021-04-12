interface FontSize {
    xlarge: string;
    large: string;
    medium: string;
    normal: string;
    small: string;
    xSmall: string;
}

interface FontWeight {
    bold: string;
    medium: string;
    normal: string;
    light: string;
    thin: string;
}

interface Font {
    family: string;
    size: FontSize;
    weight: FontWeight;
}

const fontSize: FontSize = {
    xlarge: '36px',
    large: '28px',
    medium: '18px',
    normal: '16px',
    small: '14px',
    xSmall: '12px',
};
const fontWeight: FontWeight = {
    bold: '700',
    medium: '600',
    normal: '500',
    light: '300',
    thin: '200',
};

export const fonts: Font = {
    family: 'Helvetica',
    size: fontSize,
    weight: fontWeight,
};
export function getThemeFont(props: any): Font {
    return props.theme.font;
}
