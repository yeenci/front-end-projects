let qrCode;

function generateQRCode() {
  const qrCodeDiv = document.getElementById("qr-code");
  const text = document.getElementById("text").value.trim();

  if (!text) {
    qrCodeDiv.innerHTML =
      '<p style="color:red;">Please enter a valid input.</p>';
    return;
  }

  qrCodeDiv.innerHTML = ""; // Clear previous QR

  qrCode = new QRCodeStyling({
    width: 256,
    height: 256,
    data: text,
    image: "",
    dotsOptions: {
      color: "#03045e",
      type: "rounded",
    },
    backgroundOptions: {
      gradient: {
        type: "linear",
        rotation: 90,
        colorStops: [
          { offset: 0, color: "#fff" },
          { offset: 1, color: "#fff" },
        ],
      },
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 4,
      imageSize: 0.3,
    },
  });

  qrCode.append(qrCodeDiv);
}
