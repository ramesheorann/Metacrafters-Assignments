# Created two similar projects in `JavaScript`(to store NFTs) and `Solidity`(to store Digital Coins).


## Description
### JavaScript Proof
For this project we have to create a variable that can hold multiple NFT's and an object that will hold the metadata for our NFTs.<br/>
Then we will create functions to print all NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name)) and return the number of NFT's we have created.

### Ethereum Proof
For this project we will be creating,<br/>
    1. Public variables that store the details about our coin (Token Name, Token Abbrv., Total Supply)<br/>
    2. A mapping of addresses to balances.<br/>
    3. A `mint function` that takes two parameters: an address and a value, the function then increases the total supply by that number and increases the balance of the “sender” address by that amount.<br/>
    4. A `burn function`, which works opposite of the mint function, as it will destroy tokens. It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.


## Authors
[Ramesh](https://www.linkedin.com/in/ramesheorann/)


## License

This project is released under the [MIT License](LICENSE).

## Credits

This project is a solution to the project task provided by [MetaCrafters](https://www.metacrafters.io/).
