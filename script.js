document.addEventListener('DOMContentLoaded', () => {
  const orders = document.querySelectorAll('dl');

  orders.forEach((order) => {
    // const {key} = order.dataset;
    const { biscuits } = order.dataset;
    const { donuts } = order.dataset;
    const { pancakes } = order.dataset;
    const delivered = order.dataset.delivered === 'true';

    const biscuitsCount = order.querySelector('.biscuits .count');
    const donutsCount = order.querySelector('.donuts .count');
    const pancakesCount = order.querySelector('.pancakes .count');
    const statusElement = order.querySelector('.status dd');

    biscuitsCount.textContent = biscuits;
    donutsCount.textContent = donuts;
    pancakesCount.textContent = pancakes;
    statusElement.textContent = delivered ? 'Delivered' : 'Pending';
  });
});
