async function main() {
  console.log('Starting seeding');

  // CODE SEED HERE

  console.log('Seeding finished');
}

await main()
  .then(async () => {})
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  });
