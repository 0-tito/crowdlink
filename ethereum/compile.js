const path = require("path");
const solc = require("solc");
const fs = require("fs-extra");

// delete entire build folder
const buildPath = path.resolve(__dirname, "build");
fs.removeSync(buildPath);

// read campaign.sol from the contracts folder
const campaignPath = path.resolve(__dirname, "contracts", "Campaign.sol");
const source = fs.readFileSync(campaignPath, "utf8");

//compile source and extract the contracts object
const output = solc.compile(source, 1).contracts;

// re-create the build folder
fs.ensureDirSync(buildPath) 

// loop over output and write out contents of the contracts to seperate files   
for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(":", "") + ".json"),
        output[contract]
    );
}