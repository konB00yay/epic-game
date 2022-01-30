const main = async () => {
    const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
    const gameContract = await gameContractFactory.deploy(
      ["Darth Maul", "Count Dooku", "Darth Vader"],
      [
        "QmQDh5V5U5uBHs6LKGgjVLRFKJYZ7pVEMUsN9tngsbNwNB",
        "Qme9vTmEJDNbfkjTYmrs2MqwKpE6wwSeTvwtypxrfJZeCj",
        "QmcJy6D5ufN9mYcAkvrDAuVdojJmgS5Ai471QstCotnbPG",
      ],
      [150, 300, 200],
      [75, 50, 100],
      "Elon Musk",
      "https://i.imgur.com/AksR0tt.png",
      10000,
      50
    );
    await gameContract.deployed();
    console.log("Contract deployed to:", gameContract.address);
  
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();
  