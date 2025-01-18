//encryption
function encryptMessage() {
    const message = document.getElementById("inputMessage").value;
    const key = document.getElementById("key").value;

    if (!message || !key) {
        alert("Please enter both the message and the key.");
        return;
    }

    try {
        //En AES
        const encrypted = CryptoJS.AES.encrypt(message, key).toString();
        document.getElementById("output").innerText = `Encrypted Message:\n${encrypted}`;
    } catch (error) {
        console.error("Encryption Error:", error);
        document.getElementById("output").innerText = "Error: Encryption failed!";
    }
}

//decryption
function decryptMessage() {
    const encryptedMessage = document.getElementById("inputMessage").value;
    const key = document.getElementById("key").value;

    if (!encryptedMessage || !key) {
        alert("Please enter both the encrypted message and the key.");
        return;
    }

    try {
        // De AES
        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
        document.getElementById("output").innerText = decrypted || "Decryption failed! Check your key or message.";
    } catch (error) {
        console.error("Decryption Error:", error);
        document.getElementById("output").innerText = "Error: Decryption failed!";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const encryptBtn = document.getElementById("encryptBtn");
    const decryptBtn = document.getElementById("decryptBtn");

    encryptBtn.addEventListener("click", encryptMessage);
    decryptBtn.addEventListener("click", decryptMessage);
});
