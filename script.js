// Script to generate and download vCard
const downloadVCFButton = document.getElementById('download-vcf');

downloadVCFButton.addEventListener('click', () => {
    // Create vCard data
    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:Ibrahim
ORG:Web Developer | Graphic Designer | E-commerce Businessman
TEL;TYPE=mobile:+8801908111251
EMAIL:ibrahim094islam@gmail.com
ADR;TYPE=home:;;J65X+CMM Baraikhali;Sreenagar;Munshiganj
URL:https://www.facebook.com/ibrahim094is
URL:https://ibrahimis5684.github.io/portfolio
URL:https://www.instagram.com/ibrahim094is
END:VCARD
    `.trim();

    // Create a Blob from the vCard data
    const blob = new Blob([vCardData], { type: 'text/vcard' });

    // Create a link to download the vCard
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'Ibrahim.vcf';

    // Simulate a click on the link to trigger the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
