import React from 'react';
import { getColors } from 'common/theme/colors';
import styled from 'styled-components';

const ColorLabel = styled.div`
    padding: 20px;
    font-size: 16px;
`;

const ColorContainer = styled.div`
    display: flex;
    padding: 0 20px 20px 20px;
`;
const ColorBox: any = styled.div`
    position: relative;
    display: flex;
    width: 200px;
    height: 200px;

    border: 1px solid #efefef;

    background-color: ${(props: any) => props.bg};

    .tone {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        background: rgba(0, 0, 0, 0.7);
        color: #fff;
    }
`;

enum ColorTone {
    dark = 'dark',
    medium = 'medium',
    normal = 'normal',
    light = 'light',
    thin = 'thin',
}

const themeColors = getColors();

export default function Colors() {
    const palette: any = themeColors.palette;
    const colorNames = Object.keys(palette);
    return (
        <>
            <ColorContainer>
                <ColorBox bg={themeColors.primaryColor.normal}>
                    <div className="tone">
                        Primary Color {themeColors.primaryColor.normal}
                    </div>
                </ColorBox>
                <ColorBox bg={themeColors.secondaryColor.normal}>
                    <div className="tone">
                        Secondary Color {themeColors.secondaryColor.normal}
                    </div>
                </ColorBox>
            </ColorContainer>
            {colorNames.map((color: string) => {
                return (
                    <React.Fragment key={color}>
                        <ColorLabel>{color}</ColorLabel>
                        <ColorContainer>
                            {Object.values(ColorTone).map((tone) => {
                                return (
                                    <ColorBox
                                        bg={palette[color][tone]}
                                        key={palette[color][tone]}
                                    >
                                        <div className="tone">
                                            {tone}: {palette[color][tone]}
                                        </div>
                                    </ColorBox>
                                );
                            })}
                        </ColorContainer>
                    </React.Fragment>
                );
            })}
        </>
    );
}
