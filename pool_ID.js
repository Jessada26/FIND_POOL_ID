let startClickID = 0;  // You can change length.
let yourLpInput = "";  // You can change lp address.
let poolInfo = "9";    // You can change collapse.

let btn = document.querySelector(
  "#readCollapse" + String(poolInfo) + " #btn_" + String(poolInfo)
);

async function Auto() {
  if (
    String(
      document.querySelector("#myanswer_" + String(poolInfo) + " a").innerText
    ) === String(yourLpInput)
  ) {
    if (Number(startClickID - 1) === -1) {
      await alert(
        "poolID is:" + document.querySelector("#readCollapse" + String(poolInfo) + " input").value
      );
    } else {
      if (Number(document.querySelector("#readCollapse" + String(poolInfo) + " input").value) === Number(startClickID)) {
        await alert("poolID is:" + (startClickID));
      } else {
        await alert("poolID is:" + (startClickID - 1));
      }
    }
  } else {
    document.querySelector(
      "#readCollapse" + String(poolInfo) + " input"
    ).value = await startClickID;
    await btn.click();
    if (btn.disabled) {
      if (startClickID > 0) {
        await console.log(" address: "+ document.querySelector("#myanswer_" + String(poolInfo) + " a").innerText + " id: " + (startClickID - 1));
      }
      await startClickID++;
      await setTimeout(Auto, 1500);
    } else {
      await alert("BSC Limit click at pool_id:" + (startClickID - 1));
      await location.reload();
    }
  }
}

Auto();
