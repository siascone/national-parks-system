class Park {
    constructor(parkData) {
        this.parkData = parkData;
        this.buildPark = this.buildPark.bind(this)

        this.buildPark();
    }

    buildPark() {
        let parkDiv = document.getElementById('park')
        parkDiv.innerText = this.parkData.fullName;
    }
}

export default Park;