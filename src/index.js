// import Example from './scripts/example';
import Select from './scripts/select';
import getParks from './scripts/getParks';

document.addEventListener('DOMContentLoaded', async () => {
    console.log('hello world');

    const main = document.getElementById('main');
    const parksSelect = document.getElementById('parks-select')
    const parks = await getParks();
    // new Example(main)

    console.log(parks)
    new Select(parksSelect, parks)
})