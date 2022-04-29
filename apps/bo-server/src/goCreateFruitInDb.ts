import { prismaClient } from "freely-prisma";

export function goCreateFruitInDb({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return prismaClient.fruit.create({
    data: {
      name,
      color,
    },
  });
}
