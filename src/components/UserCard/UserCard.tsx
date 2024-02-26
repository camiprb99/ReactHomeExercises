import { FC } from 'react';
import { User } from '../../pages/types';

interface Props {
    user: User;
}
const UserCard: FC<Props> = ({ user }) => {
    if (!user) {
        return <div>Insert a number...</div>;
    }

    return (
        <div>
            <img src={user.picture.medium} alt={`${user.name.first} ${user.name.last}`} />
            <div>{`${user.name.first} ${user.name.last}`}</div>
        </div>
    );
};

export default UserCard;
