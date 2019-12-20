import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';
import AOS from 'aos';
import 'aos/dist/aos.css'


import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { LeaderboardService } from 'src/app/services/leaderboard.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  imageList;
  rowIndexArray: any[];
  imageslength:any[];
  public photolength:number = 5;
  name: string;
  _db:any;
  likestatus: boolean=false;
  images:any;
  subscription: any;
  likeMap = new Map();
  
 
  

  constructor(private service: ImageService, db: AngularFireDatabase,public leader:LeaderboardService) { 

  }

  ngOnInit() {
    

    console.log("before sending ");
    this.subscription = this.service.getImageDetailList().snapshotChanges().subscribe(
      list => {
        console.log("before sending ");
        this.imageList = list.map(item => { 
          const post = item.payload.val();
          post.key = item.key;
          return post; 
        });
        this.imageList.reverse();
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.photolength=this.imageList.length;
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 3)).keys());
        this.imageslength=Array(this.imageList.length);
        console.log("after sending ");
        console.log(this.photolength);
        // this.subscription.unsubscribe();
      }
    );
    this.imageList = this.service.getImageDetailList();


    jQuery(function($) {
  
      // Function which adds the 'animated' class to any '.animatable' in view
      var doAnimations = function() {
        
        // Calc current offset and get all animatables
        var offset = $(window).scrollTop() + $(window).height(),
            $animatables = $('.animatable');
        
        // Unbind scroll handler if we have no animatables
        if ($animatables.length == 0) {
          $(window).off('scroll', doAnimations);
        }
        
        // Check all animatables and animate them if necessary
        $animatables.each(function(i) {
           var $animatable = $(this);
          if (($animatable.offset().top + $animatable.height() - 20) < offset) {
            $animatable.removeClass('animatable').addClass('animated');
          }
        });
    
      };
      
      // Hook doAnimations on scroll, and trigger a scroll
      $(window).on('scroll', doAnimations);
      $(window).trigger('scroll');
    
    });




   
   
  }

  like(key,like,likedby,userid)
  
  { 

      this.service.increaselikes(key,like,likedby,userid);
      
  

    }
  }
  


