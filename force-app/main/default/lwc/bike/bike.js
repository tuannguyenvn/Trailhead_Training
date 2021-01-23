import { LightningElement, api } from 'lwc';

export default class Bike extends LightningElement {
    @api bike;

    ready = false;
    connectedCallback() {
        setTimeout(() => {
            this.ready = true;
        }, 1500);
    };

}