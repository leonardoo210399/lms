const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Computer Science" },
        { name: "Music" },
        { name: "Fitness" },
        { name: "photography" },
        { name: "Accounting" },
        { name: "Engineering" },
        { name: "Filming" },
        { name: "Other" },
      ],
    });
    console.log("success");
    
  } catch (error) {
    console.log("Error seeding the database category", error);
  } finally {
    await database.$disconnect();
  }
}

main();