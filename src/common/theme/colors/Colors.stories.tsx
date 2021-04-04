import 'styled-components/macro';
import Colors from './Colors';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/Theme/Colors',
    component: Colors,
} as Meta;

const Template: Story<any> = () => <Colors />;

export const ColorPalette = Template.bind({});
