import type { QueryResolvers } from './../../../types.generated';

export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  { id },
  { prisma }
) => {
  const user = prisma.user.findUniqueOrThrow({ where: { id } });

  return {
    __typename: 'User',
    ...user,
  };
};
