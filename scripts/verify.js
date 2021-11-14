const hre = require("hardhat");
const network = hre.network.name;

async function main()
{
    try{
        await hre.run("verify:verify", {
            address: "0xf56a1cD90De1C34c174C3A3606f2e7f3010acbde",
            constructorArguments: ["10000"],
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