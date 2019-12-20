import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';
import Typed from 'typed.js';
import { Router } from '@angular/router';
import { DisplayService } from 'src/app/services/display.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','./home2.component.css','./responsive.css']
})
export class HomeComponent implements OnInit {

  public username = localStorage.getItem('username');
  message = 0;
  logged=false;
  @Output() messageEvent = new EventEmitter<number>();

  constructor(private titleService: Title, private router: Router, private display: DisplayService) {}
  
  profile(){
    this.router.navigate(['/details/'+this.username]);
  }
  gotofit(){
    if(this.logged){
      this.router.navigate(['/environment/home']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  gotophoto(){
    if(this.logged){
      this.router.navigate(['/photography/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }  }
  gotvolun(){
    if(this.logged){
      this.router.navigate(['/volunteer/dashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  gotoenviron(){
    if(this.logged){
      this.router.navigate(['/environment/home']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

  loginpopup() {
    this.router.navigate(['/login']);
  }

  donation() {
    this.router.navigate(['/donation']);
  }

  open() {
    this.router.navigate(['/register']);
  }

  back() {
    window.scrollTo(0, 0);
  }


  sendMessage() {
    this.messageEvent.emit(this.message);
  }

  global(){
    if(this.logged){
      this.router.navigate(['/globaldashboard']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }
  ngOnDestroy(){
    this.display.changeNavBarState(true)
  }

  ngOnInit() {
    this.titleService.setTitle('Welcome to Frex!');
    this.getData();
    this.sendMessage();

    if(localStorage.username!=null){
      this.logged = localStorage.username.length > 0;
    }

    if(true){
      var btn = $('.post_login')
      btn.css({opacity:'100%'});
    }
    

    this.display.changeNavBarState(false);

    $('.jogger').click(function() {
      $('html, body').animate({
          scrollTop: $('.jogger_content1').offset().top - 50
      }, 1000);
    });
    $('.photography').click(function() {
      $('html, body').animate({
          scrollTop: $('.photography_content').offset().top - 50
      }, 1000);
    });
    $('.volunteer').click(function() {
      $('html, body').animate({
          scrollTop: $('.volunteer_content').offset().top - 50
      }, 1000);
    });
    $('.environment').click(function() {
      $('html, body').animate({
          scrollTop: $('.environment_content').offset().top - 50
      }, 1000);
    });

    let typed = new Typed('.typed-strings', {
      strings: ['Welcome to FReX', 'Building a community in'],
      typeSpeed: 60,
      showCursor: false,
      smartBackspace: true // Default value
    });

    let typed1 = new Typed('.typed-strings1', {
      strings: ['Fitness', 'Photography', 'Volunteering', 'Environment'],
      typeSpeed: 60,
      loop: true,
      startDelay: 2000,
      showCursor: false,
      smartBackspace: true,
       // Default value
    });


    function isScrolledIntoView(elem) {
      let docViewTop = $(window).scrollTop();
      let docViewBottom = docViewTop + $(window).height();

      let elemTop = $(elem).offset().top;
      let elemBottom = elemTop + $(elem).height();

      return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }



    // If element is scrolled into view, fade it in
    $(window).scroll(function() {
      $('#footer').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({opacity: '100%'});
        }
      });
      $('#footer').each(function() {
        if (isScrolledIntoView(this) === false) {
          $(this).css({opacity: '0%'});
        }
      });

      $('.animation_one').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({opacity: '100%'});
          $(this).addClass('fadeInLeft');
        }
      });

      $('.animation_two').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({opacity: '100%'});
          $(this).addClass('fadeInRight');
        }
      });
      $('.animation_three').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({opacity: '100%'});
          $(this).addClass('fadeInLeft');
        }
      });
      $('.animation_four').each(function() {
        if (isScrolledIntoView(this) === true) {
          $(this).css({opacity: '100%'});
          $(this).addClass('fadeInRight');
        }
      });
    });

  }
  ngAfterViewInit() {
  }
  getData() {
  }
}
