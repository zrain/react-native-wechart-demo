import Mock from 'mockjs';
import AvatarUriObj from '@assets/avatar';

const data = Object.values(AvatarUriObj).map((img, index) => {
    return {
        id: index + 1,
        name: Mock.Random.cname(),
        avatarUri: img
    };
});

export default data;
