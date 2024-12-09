function ChkString(str: string): boolean {
    return str.toLowerCase().includes("marvellous");
}

const inputString = "Pune Kothrud Marvellous Infosystems";
if (ChkString(inputString)) {
    console.log("String contains Marvellous in it.");
} else {
    console.log("String does not contain Marvellous in it.");
}