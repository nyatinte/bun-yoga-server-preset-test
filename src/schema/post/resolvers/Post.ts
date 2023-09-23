import type { PostResolvers } from './../../types.generated';
export const Post: PostResolvers = {
  author: (parent, _, { prisma }) => {
    return prisma.post.findUnique({ where: { id: parent.id } }).author();
  },
};
