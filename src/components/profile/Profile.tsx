import { memo } from 'react';
export interface ProfileProps {
    name?: string;
}

const Profile = ({ name }: ProfileProps) => {
    console.log('profile', 'render!');
    return <div>{name}</div>;
};

export default memo(Profile);
