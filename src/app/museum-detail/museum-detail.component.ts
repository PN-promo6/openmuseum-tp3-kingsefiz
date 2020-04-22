import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MuseumListService } from '../services/museumList.service';


@Component({
  selector: 'app-museum-detail',
  templateUrl: './museum-detail.component.html',
  styleUrls: ['./museum-detail.component.css']
})

export class MuseumDetailComponent implements OnInit {
  museumRef: string;
  museumName: string;
  museumAdress: string;
  museumOpening: string;
  museumCity: string;
  museumPhone: string;
  museumZipCode: string;
  museumWebSite: string;
  museumFax: any;
  museumImage;

  constructor(private museumListService: MuseumListService, private route: ActivatedRoute) { }

  ngOnInit() {
    const museumRef = this.route.snapshot.params['museumRef'];
    this.museumName = this.museumListService.getMuseumByRef(museumRef).nom_du_musee;
    this.museumAdress = this.museumListService.getMuseumByRef(museumRef).adr;
    this.museumOpening = this.museumListService.getMuseumByRef(museumRef).periode_ouverture;
    this.museumCity = this.museumListService.getMuseumByRef(museumRef).ville;
    this.museumPhone = this.museumListService.getMuseumByRef(museumRef).telephone;
    this.museumZipCode = this.museumListService.getMuseumByRef(museumRef).cp;
    this.museumWebSite = this.museumListService.getMuseumByRef(museumRef).sitweb;
    this.museumFax = this.museumListService.getMuseumByRef(museumRef).fax;
    this.museumImage = this.museumListService.getMuseumByRef(museumRef).image;
  }
}
