MAX_COUNT = 15120;
PERIOD = 2 * 60 * 1000;
let data;
let idx;
let first;
let last; 

const onInit = () => {
  data = new Int8Array(MAX_COUNT);
  idx = 0;
  first = Math.round(Date.now());
  last = 0;

  NRF.nfcURL('https://rsmeral.github.io/puck-temp-logger');
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
}, PERIOD);
