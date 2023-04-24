export class Place {


    constructor(
        public name: string,
        public address: string,
        public location: { lat: number, lng: number },
        public photos: { height: number, html_attributions: [], photo_reference: string, width: number }) {

    }
}
