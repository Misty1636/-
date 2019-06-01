(function createChart() {
  const chart = document.querySelector('#chart__box');
  let str = '';

  for (let i = 2; i < 10; i += 1) {
    let leftCol = '';
    let rightCol = '';
    for (let j = 1; j < 10; j += 1) {
      if (j > 3) {
        rightCol += `<span>${i} × ${j} = ${i * j}</span>`;
      } else {
        leftCol += `<span>${i} × ${j} = ${i * j}</span>`;
      }
    }
    str += `<div class="col-xl-4 col-md-6 col-10 h-mb-5 text--primary">
      <div class="chart__item row no-gutters h-px-5 h-py-6 h-justify-content-between bg--white">
        <div class="col-6 h-flex h-flex-column">
                        <h3 class="chart__item__title">${i}</h3>
                        ${leftCol}
                    </div>
                    <div class="col-6 h-pt-2 h-flex h-flex-column h-align-items-end">
                        ${rightCol}
                    </div>
                </div>
            </div>`;
  }
  chart.insertAdjacentHTML('beforeend', str);
}());
