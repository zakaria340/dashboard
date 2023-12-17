import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const response = await Promise.all([
    prisma.marque.upsert({
      where: { slug: 'ford' },
      update: {},
      create: {
        name: 'Ford',
        slug: 'ford',
        image:
          'https://images.ctfassets.net/e5382hct74si/2P1iOve0LZJRZWUzfXpi9r/9d4d27765764fb1ad7379d7cbe5f1043/ucxb4lHy_400x400.jpg',
        models: {
          create: [
            {
              name: 'Focus',
              slug: 'focus',
              image : 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg'
            },
            {
              name: 'Fiesta',
              slug: 'fiesta',
              image : 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg'
            },
          ],
        },          
      },
    }),
    prisma.marque.upsert({
      where: { slug: 'mercedes' },
      update: {},
      create: {
        name: 'Mercedes',
        slug: 'mercedes',
        image:
          'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg',
        models: {
          create: [
            {
              name: 'Class A',
              slug: 'class-a',
              image : 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg'
            },
            {
              name: 'Class CLS',
              slug: 'class-cls',
              image : 'https://images.ctfassets.net/e5382hct74si/4BtM41PDNrx4z1ml643tdc/7aa88bdde8b5b7809174ea5b764c80fa/adWRdqQ6_400x400.jpg'
            },
          ],
        },
      },
    }),
  ])
  console.log(response)
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })