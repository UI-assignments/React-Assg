let products: {
    pId: number;
    productName: string;
    productPrice: number;
    productAvailable: boolean;
    imageUrl: string;
    productDescription: string;
  }[] = [
    {
      pId: 432,
      productName: "Samsung Galaxy Note 7",
      productPrice: 699,
      productAvailable: true,
      imageUrl:
        "https://th.bing.com/th/id/OIP.KpRdmbIQ96qEfZx8pI1CvAHaHv?w=175&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
      productDescription:
        "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
      pId: 433,
      productName: "Samsung Galaxy S6 Edge",
      productPrice: 630,
      productAvailable: true,
      imageUrl:
        "data:image/jpeg;base64,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",
      productDescription:
        "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    },
    {
      pId: 434,
      productName: "Nokia Lumia 640XL",
      productPrice: 224,
      productAvailable: false,
      imageUrl:
        "data:image/jpeg;base64,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",
      productDescription:
        "Samsung Galaxy Note 7 is a stylish mobile you can ever have. It has 64GB memory."
    }
  ];
  
  let res: string = "";
  // res += ``;
  products.map(
    (product) =>
      (res += `
      <div style="padding: 15px; display: flex; flex-direction: column;" >
      <div>
      <img
      id="phoneImage"
      src="${product.imageUrl}"
      height="250px"
    />
  </div>
  <div style="padding-top: 10px; margin-left:50px; ">
    <div>
      <b><a id="pName" style="color: steelblue;" href="/ex1/index.html">${
        product.productName
      }</a></b>
    </div>
    <div style="padding-top: 10px">
      <b>Price:</b>&nbsp;&dollar;
      <span
        id="pPrice"
      >
        ${product.productPrice}
      </span>
    </div>
    <div>
      <b>Status:</b>&nbsp;<span id="pAvailable">${
        product.productAvailable ? "Available" : "Not Available"
      }</span>
    </div>
    <div>
      <b class="text-danger">Discount:</b>&nbsp;<span id="pDiscount"
        >5%</span
      >
    </div>
  </div>
  </div>
  `)
  );
  
  const product = document.getElementById("products") as HTMLDivElement | null;
  if (product != undefined) {
    product.innerHTML = res;
  }
  