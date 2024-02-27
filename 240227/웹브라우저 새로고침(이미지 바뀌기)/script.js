window.onload = () => {
  const bgCount = 5;
  const randomNumber = Math.ceil(Math.random() * bgCount);
  document.body.style.backgroundImage = `url(./images/bg-${randomNumber}.jpg)`;
};

// const bgArr = ["bg-1", "bg-2", "bg-3", "bg-4", "bg-5"];
// const randomNumber = Math.ceil(Math.random() * bgArr.length);
