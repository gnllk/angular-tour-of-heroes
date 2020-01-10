import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor(private heroService: HeroService,
    private messageService: MessageService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.messageService.add(`Getting hero ${id}`);
    this.heroService.getHeros().subscribe(data => {
      this.hero = data.find(a => a.id === id);
      this.messageService.add(`Got hero ${id}`);
    });
  }

}
