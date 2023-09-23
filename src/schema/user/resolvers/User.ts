import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
  posts: (parent, _, { prisma }) => {
    return prisma.user.findUnique({ where: { id: parent.id } }).posts();
  },
};
