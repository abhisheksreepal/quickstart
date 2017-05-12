export class LoadingPage {
    public status: string;
    constructor(val: string = "loading") {
        this.status = val;
    }
    standby() {
        this.status = "loading";
    }
    ready() {
        this.status = "active";
    }
}