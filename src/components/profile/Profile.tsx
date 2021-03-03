export interface ProfileProps {
    user: {
        name?: string;
    };
}

const Profile = ({ user }: ProfileProps) => {
    return <div>{user?.name}</div>;
};

export default Profile;
