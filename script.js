document.getElementById("btn").addEventListener("click", function() {
  const inputNumber = document.getElementById("ip").value;

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(inputNumber);
    }, 2000);
  });

  promise1.then(result => {
    document.getElementById("output").textContent = `Result: ${result}`;
    return result;
  }).then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result * 2);
      }, 1000);
    });
  }).then(result => {
    document.getElementById("output").textContent = `Result: ${result}`;
    return result;
  }).then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result - 3);
      }, 1000);
    });
  }).then(result => {
    document.getElementById("output").textContent = `Result: ${result}`;
    return result;
  }).then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result / 2);
      }, 1000);
    });
  }).then(result => {
    document.getElementById("output").textContent = `Result: ${result}`;
    return result;
  }).then(result => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(result + 10);
      }, 1000);
    });
  }).then(result => {
    document.getElementById("output").textContent = `Final Result: ${result}`;
  }).catch(error => {
    console.error("An error occurred:", error);
  });
});
