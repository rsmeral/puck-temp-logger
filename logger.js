MAX_COUNT = 15120;
data = new Int8Array(MAX_COUNT);
period = 2 * 60 * 1000;
first = Math.round(Date.now());
idx = 0;
last = 0;

const onInit = () => {
  data = new Int8Array(MAX_COUNT);
  first = Math.round(Date.now());
  idx = 0;
  last = 0;
};

const getData = () => {
  console.log('{');
  console.log(`"first": ${first},`);
  console.log(`"last": ${last},`);
  console.log(`"data": [`);
  console.log(data[0]);
  for (let i=1; i < idx; i++) {
    console.log(`,${data[i]}`);
  }
  console.log(']');
  console.log('}');
};

setInterval(() => {
  if (idx < MAX_COUNT) {
    data[idx++] = Math.round(E.getTemperature());
    last = Math.round(Date.now());
  }
}, period);
