/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

let NFTs=[];
let totalNFTs=0;

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT(enter_name, enter_eyecolour, enter_shirtType, enter_bling, enter_pantType, enter_shoesType ) {
    const nft={
        name : enter_name,
        eyeColour : enter_eyecolour ,
        shirtType : enter_shirtType ,
        bling : enter_bling ,
        pantType : enter_pantType ,
        shoesType : enter_shoesType ,
    }
    NFTs.push(nft);
    totalNFTs++;
};

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs (){
    for(i=0 ; i<totalNFTs ; i++){
        const NFT=NFTs[i]
        console.log("Name: "+NFT.name);
        console.log("Eye Colour: "+NFT.eyeColour);
        console.log("Shirt Type: "+NFT.shirtType);
        console.log("Bling: "+NFT.bling);
        console.log("Pant Type: "+NFT.pantType);
        console.log("Shoes Type: "+NFT.shoesType) ;
        console.log("                          ")
        
    }
}

// print the total number of NFTs we have minted to the console

function getTotalSupply(){
    return totalNFTs;
}

// call your functions below this line

const nft1 = mintNFT("Sonu", "Brown", "T-shirt", "Gold", "Cargo", "Sneakers");
const nft2 = mintNFT("Deepak", "Black", "Sweater", "Silver", "Pant", "Chalsea");
const nft3 = mintNFT("Ramesh", "Brown", "Hoodie", "Ruby", "Jeans", "Sneakers");
const nft4 = mintNFT("Dheeraj", "Blue", "Jacket", "Platinum", "Cargo", "Sneakers");
const nft5 = mintNFT("Ram", "Black", "Kurta", "Diamond", "Pajama", "Jutti");
const nft6 = mintNFT("Isha", "Grey", "Bra", "Gold", "Jeans", "Sandals");
const nft7 = mintNFT("Jagdish", "Blue", "Hoodie", "Jem", "Jeans", "Sports");
const nft8 = mintNFT("Taniya", "Blue", "T-shirt", "Gold", "Jeans", "Sneakers");
const nft9 = mintNFT("Tanisha", "Black", "Frock", "Gold", "Panty", "Sneakers");
const nft10 = mintNFT("Payal", "Pale", "Top", "Gold", "Cargo", "Sneakers");

listNFTs();
getTotalSupply();
console.log("Total number of NFTs minted: " + getTotalSupply());
