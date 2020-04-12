const BigNumber = require("bignumber.js");
const SimpleToken = artifacts.require("SimpleToken");

contract("SimpleToken", (accounts) => {
  it("should be initialize with 0 token", async () => {
    const token = await SimpleToken.deployed();
    const totalSupply = await token.totalSupply();
    assert.equal(totalSupply.toString(), new BigNumber(0).toString());
  });

  it("should be able to mint token", async () => {
    const token = await SimpleToken.deployed();
    const amount = new BigNumber(2).times(new BigNumber(10).pow(18));
    // Mint
    await token.mint(accounts[0], amount, { from: accounts[0] });
    assert.equal(
      (await token.balanceOf(accounts[0])).toString(),
      amount.toString()
    );
  });

  it("should be able to burn token", async () => {
    const token = await SimpleToken.deployed();
    const initialSupply = await token.totalSupply();
    const amount = new BigNumber(2).times(new BigNumber(10).pow(18));
    // Mint
    await token.mint(accounts[0], amount, { from: accounts[0] });
    const finalSupply = new BigNumber(await token.totalSupply());
    assert.equal(
      finalSupply.minus(initialSupply).toString(),
      amount.toString()
    );
    // Burn
    const burnAmount = new BigNumber(1).times(new BigNumber(10).pow(18));
    await token.burn(burnAmount, { from: accounts[0] });
    assert.equal(
      (await token.totalSupply()).toString(),
      finalSupply.minus(burnAmount).toString()
    );
  });
});
