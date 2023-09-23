import type { MutationResolvers } from './../../../types.generated';
export const publishPost: NonNullable<
  MutationResolvers['publishPost']
> = async (_parent, { id }, { prisma }) => {
  const post = await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  return {
    __typename: 'Post',
    ...post,
  };
};
