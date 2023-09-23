import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const main = async () => {
  // userを100件作成
  await prisma.user.create({
    data: {
      firstName: 'test',
      lastName: 'test',
    },
  });
  await Array.from({ length: 100 }).forEach(async () => {
    await prisma.user.create({
      data: {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        posts: {
          create: {
            title: faker.lorem.sentence(),
            content: faker.lorem.paragraphs(),
            published: faker.datatype.boolean(),
          },
        },
      },
    });
  });
};

await main()
  .catch((e) => console.error(e))
  .finally(async () => {
    prisma.$disconnect();
  });
