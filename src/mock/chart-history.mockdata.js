import Mock from 'mockjs';
import AvatarObj from '@assets/avatar';

const users = [
    {
        name: Mock.Random.cname(),
        avatarUri: AvatarObj[Mock.Random.integer(1, 50)],
        isSelf: true
    },
    {
        name: Mock.Random.cname(),
        avatarUri: AvatarObj[Mock.Random.integer(1, 50)],
        isSelf: false
    }
];

const data = Mock.mock({
    ['list|1-50']: [
        {
            ['id|+1']: 1,
            ['content']: () => Mock.Random.cparagraph(1, 3),
            ['date']: () => Mock.Random.date(),
            ['userInfo|1']: users
        }
    ]
});

export default data;
