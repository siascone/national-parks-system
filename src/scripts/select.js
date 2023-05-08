import Park from './park'

class Select {
    constructor(selectEle, parks) {
        this.selectEle = selectEle;
        this.parks = parks;
        this.selected = '';

        this.setupParksSelect = this.setupParksSelect.bind(this);

        this.setupParksSelect();
    }

    setupParksSelect() {
        // debugger
        let baseOption = document.createElement('option');
        baseOption.text = 'Select';

        this.selectEle.appendChild(baseOption);

        // debugger
        // debugger
        Object.keys(this.parks).forEach(key => {
            let option = document.createElement('option')
            option.text = this.parks[key].fullName
            option.id = key
            this.selectEle.appendChild(option);
        })

        // this.parks.forEach(park => {
        //     // debugger
        //     let option = document.createElement('option')
        //     option.text = park.fullName;
        //     option.id = park.id
        //     this.selectEle.appendChild(option);
        // });

        this.selectEle.addEventListener('change', (e) => {
            e.preventDefault();
            console.log(this.selectEle.value);
            for (let i = 0; i < this.selectEle.children.length; i++) {
                // console.log(i)
                let option = this.selectEle.children[i];
                if (option.selected) {
                    let park = this.parks[option.id]
                    console.log(park)
                    new Park(park)
                }
            }
        })
    }

}

export default Select;