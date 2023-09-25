import type { UserResolvers } from './../../types.generated';
export const User: UserResolvers = {
  fullName: (parent) => `${parent.firstName} ${parent.lastName}`,
  posts: (parent, _, { prisma }) => {
    /** using Fluent API */
    return prisma.user.findUnique({ where: { id: parent.id } }).posts();

    /** not using Fluent API */
    // return prisma.post.findMany({ where: { authorId: parent.id } });
  },
};
