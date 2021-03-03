import 'styled-components/macro';
import Profile, { ProfileProps } from './Profile';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
    title: 'Components/Profile',
    component: Profile,
} as Meta;

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const DefaultProfile = Template.bind({});
DefaultProfile.args = {
    name: 'Ersin Isimtekin',
};
