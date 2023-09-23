import type { QueryResolvers } from './../../../types.generated';
export const post: NonNullable<QueryResolvers['post']> = async (
  _parent,
  { id },
  { prisma }
) => {
  const post = prisma.post.findUniqueOrThrow({ where: { id } });
  return {
    __typename: 'Post',
    ...post,
  };
};
