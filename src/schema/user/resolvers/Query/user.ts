import type { QueryResolvers } from './../../../types.generated';

export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  { id },
  { prisma }
) => {
  const user = await prisma.user.findUnique({ where: { id } });

  return {
    __typename: 'User',
    ...user,
  };
};
