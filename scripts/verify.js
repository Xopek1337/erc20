const hre = require("hardhat");
const network = hre.network.name;

async function main()
{
    try{
        await hre.run("verify:verify", {
            address: "0xb4E042a2f5A4AAB67D5C10Fb83f4Ed516A39c98e",
            constructorArguments: ["1000000000000"],
        });
    } catch(e) {
        console.log(e);
    }
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });