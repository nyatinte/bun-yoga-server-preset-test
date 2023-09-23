import type { QueryResolvers } from './../../../types.generated';
export const users: NonNullable<QueryResolvers['users']> = async (
  _parent,
  _arg,
  { prisma }
) => {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });

  return users.map((user) => ({
    __typename: 'User',
    ...user,
  }));
};
