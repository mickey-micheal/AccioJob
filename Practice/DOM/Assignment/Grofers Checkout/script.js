const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
const price = document.querySelectorAll("price")
const h1 = document.createElement("h1")

const getSum = () => {
//Add your code here
 
  for(let item of price)
  {
    h1.innerText = item 
  }
  
};

getSumBtn.addEventListener("click", getSum);

