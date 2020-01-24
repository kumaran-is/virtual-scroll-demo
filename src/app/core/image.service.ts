import { Injectable } from "@angular/core";
import { of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imageCollections = [
    {
      url:
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?fm=jpg&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1493102240626-79998c21d133?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2098&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1493873432549-bf8cbeb7d0c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2236&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1468571452166-b089f160f1c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2236&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1414146782248-462e06300dbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1466873767530-f11ce2656cff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500053857731-701d06fac2fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1478008774171-2c3d2492a438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1418946188801-4dbceebd6b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1451122315102-27525f2381fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1483639250144-1e53cdf4befa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1460134936895-45aecaffeaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1460134936895-45aecaffeaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1423245617392-005724ca6338?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1418226902076-21397a66cccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1486978665430-dc8c68e2dd60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1456455961666-c5a4eab3964b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1563823856120-88d1fe6b75bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/flagged/photo-1555063976-e3510bcc82ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1418833309618-f98e69067c54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1559511518-ed1d93736444?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1577262243173-23bfd0f0c147?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1563234586-6efa69dd91c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1563709505442-0b8e4950183f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500073880305-60625f377386?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1415696036885-d2902d10ed4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1445462657202-a0893228a1e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1484627114770-d8f233bbe65c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1422866906178-445fb2a05751?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1527348995621-e28a83bf6fb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1541807360746-039080941306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1501490475671-84606cdc8a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1565025700820-7adf2ac89d7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1433725147679-65e7dc716a8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1501114676295-bbbcc7a12466?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500263686199-a297f0c65e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1500312247-090995212394?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    },
    {
      url:
        "https://images.unsplash.com/photo-1533654793924-4fc4949fb71e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
    }
  ];

  image =
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?fm=jpg&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80";

  constructor() {}

  public getImages() {
    return of(this.imageCollections);
    // return of(this.image);
  }
}
