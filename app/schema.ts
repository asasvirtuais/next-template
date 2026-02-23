import * as user from '@/packages/user/types'

export const schema = {
    users: {
        readable: user.readable,
        writable: user.writable,
    },
}