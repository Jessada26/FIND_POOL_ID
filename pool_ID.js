let startClickID = 0;
let yourLpInput = "0x3747e3e107223539FD09bb730b055A1f11F78Adf";
let poolInfo = "9";

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
      await startClickID++;
      await setTimeout(Auto, 1500);
    } else {
      await alert("BSC Limit click at pool_id:" + (startClickID - 1));
      await location.reload();
    }
  }
}

Auto();
