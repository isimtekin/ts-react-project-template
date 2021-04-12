import 'styled-components/macro';
import { Grid, GridProps } from './Grid';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import { useGetClassName } from '../../hooks';
import randomColor from 'randomcolor';

const GridContainer = styled.div`
    // border: 1px solid red;
    min-height: 200px;
`;

const GridItem = styled.div`
    // border: 1px solid gray;
    background: ${randomColor()};
    min-height: 200px;
    color: white;
`;

const GridItemContent = styled.div`
    background: ${randomColor()};
    color: white;
`;

export default {
    title: 'Components/Grid',
    component: Grid,
    argTypes: {
        box1: {
            control: {
                type: 'number',
            },
        },
        box2: {
            control: {
                type: 'number',
            },
        },
        box3: {
            control: {
                type: 'number',
            },
        },
    },
} as Meta;

interface StoryProps extends GridProps {
    box1?: number;
    box2?: number;
    box3?: number;
}

const Template: Story<StoryProps> = ({ box1, box2, box3, ...args }) => {
    const gridClassName = useGetClassName(GridContainer);
    const gridItemClassName = useGetClassName(GridItem);
    return (
        <Grid container className={gridClassName} {...args}>
            <Grid item desktop={box1} className={gridItemClassName}>
                box1
            </Grid>
            <Grid item desktop={box2} className={gridItemClassName}>
                box2
            </Grid>
            <Grid item desktop={box3} className={gridItemClassName}>
                box3
            </Grid>
        </Grid>
    );
};

const Template2: Story<StoryProps> = ({ box1, box2, box3, ...args }) => {
    const gridClassName = useGetClassName(GridContainer);
    const gridItemClassName = useGetClassName(GridItem);

    return (
        <Grid container className={gridClassName} {...args}>
            <Grid item desktop={box1} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
            <Grid item desktop={box2} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
            <Grid item desktop={box3} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
        </Grid>
    );
};

const RowTemplate: Story<StoryProps> = ({ box1, box2, box3, ...args }) => {
    const gridClassName = useGetClassName(GridContainer);
    const gridItemClassName = useGetClassName(GridItem);

    return (
        <Grid row className={gridClassName} {...args}>
            <Grid item desktop={box1} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
            <Grid item desktop={box2} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
            <Grid item desktop={box3} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
        </Grid>
    );
};

const NestedTemplate: Story<StoryProps> = ({ box1, box2, box3, ...args }) => {
    const gridClassName = useGetClassName(GridContainer);
    const gridItemClassName = useGetClassName(GridItem);

    return (
        <Grid container className={gridClassName} {...args}>
            <Grid item desktop={box1} className={gridItemClassName}>
                <GridItemContent>
                    <Grid row className={gridClassName} {...args}>
                        <Grid item desktop={box1} className={gridItemClassName}>
                            <GridItemContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt, ipsam tenetur,
                                consectetur fuga at aut quidem maiores quaerat
                                velit eum molestias quisquam optio numquam
                                laboriosam quo eligendi veritatis qui officia.
                            </GridItemContent>
                        </Grid>
                        <Grid item desktop={box2} className={gridItemClassName}>
                            <GridItemContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt, ipsam tenetur,
                                consectetur fuga at aut quidem maiores quaerat
                                velit eum molestias quisquam optio numquam
                                laboriosam quo eligendi veritatis qui officia.
                            </GridItemContent>
                        </Grid>
                        <Grid item desktop={box3} className={gridItemClassName}>
                            <GridItemContent>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Deserunt, ipsam tenetur,
                                consectetur fuga at aut quidem maiores quaerat
                                velit eum molestias quisquam optio numquam
                                laboriosam quo eligendi veritatis qui officia.
                            </GridItemContent>
                        </Grid>
                    </Grid>
                </GridItemContent>
            </Grid>
            <Grid item desktop={box2} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
            <Grid item desktop={box3} className={gridItemClassName}>
                <GridItemContent>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt, ipsam tenetur, consectetur fuga at aut quidem
                    maiores quaerat velit eum molestias quisquam optio numquam
                    laboriosam quo eligendi veritatis qui officia.
                </GridItemContent>
            </Grid>
        </Grid>
    );
};

export const DefaultGrid = Template.bind({});
DefaultGrid.args = {};

export const GridContent = Template2.bind({});
GridContent.args = {
    box1: 3,
    box2: 3,
    box3: 6,
};

export const NestedGrid = NestedTemplate.bind({});
NestedGrid.args = {
    box1: 3,
    box2: 3,
    box3: 6,
};

export const RowGrid = RowTemplate.bind({});
RowGrid.args = {
    box1: 3,
    box2: 3,
    box3: 6,
};
