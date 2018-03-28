import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.Component.html'
})
export class ServerComponent{

    serverId: number = 10;
    serverName:string ="server"+this.serverId;
        allowServer = false;

public name():string {
    return this.serverName;
}
}