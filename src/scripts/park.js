class Park {
    constructor(parkData) {
        this.parkData = parkData;

        this.buildPark = this.buildPark.bind(this)
        this.buildAddress = this.buildAddress.bind(this)
        this.buildDescription = this.buildDescription.bind(this)
        this.addBreak = this.addBreak.bind(this)
        this.buildPark();
    }

    buildPark() {
        let parkDiv = document.getElementById('park')

        parkDiv.append(this.buildDescription())
        parkDiv.append(this.buildAddress())
    }

    buildDescription() {
        let oldDescription = document.getElementById('description')
        if (oldDescription) oldDescription.remove();

        const descriptionDiv = document.createElement('div');
        descriptionDiv.id = 'description';
        let descriptionHeading = document.createElement('p').innerText = 'Description:'
        descriptionDiv.append(descriptionHeading);
        this.addBreak(descriptionDiv);

        let description = this.parkData.description
        descriptionDiv.append(document.createElement('p').innerText = description)
        this.addBreak(descriptionDiv)

        return descriptionDiv
    }

    buildAddress() {
        let oldAddress = document.getElementById('address')

        if (oldAddress) oldAddress.remove();

        const addressDiv = document.createElement('div')
        addressDiv.id = 'address'
        let addressHeading = document.createElement('p').innerText = 'Address:'
        addressDiv.append(addressHeading)
        this.addBreak(addressDiv);

        let pAddress = this.parkData.addresses[0]
        let city = pAddress.city
        let line1 = pAddress.line1
        let line2 = pAddress.line2
        let line3 = pAddress.line3
        let postalCode = pAddress.postalCode
        let state = pAddress.stateCode

        if (line1.length) {
            addressDiv.append(document.createElement('p').innerText = line1)
            this.addBreak(addressDiv);
        } 
        if (line2.length) {
            addressDiv.append(document.createElement('p').innerText = line2)
            this.addBreak(addressDiv);
        }
        if (line3.length) {
            addressDiv.append(document.createElement('p').innerText = line3)
            this.addBreak(addressDiv);
        }
        addressDiv.append(document.createElement('p').innerText = `${city}, ${state} ${postalCode}`)
        // addressDiv.append(document.createElement('p', line2))
        // addressDiv.append(document.createElement('p', line3))
        // addressDiv.append(document.createElement('p', `${city}, ${state} ${postalCode}`))

        return addressDiv;

    }

    addBreak(ele) {
        const br = document.createElement('br')
        ele.append(br)
    }
}

export default Park;