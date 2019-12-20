import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../../services/image.service';



@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.scss']
})
export class PhotolistComponent implements OnInit {
  imageList: any;
  topphotolist: any;
  rowIndexArray: any[];
  imageslength:any[];
  
  public photolength:number = 5;

  // imageList;
  // rowIndexArray: any[];
  // imageslength:any[];
  // public photolength:number = 5;
  name: string;
  _db:any;
  likestatus: boolean=false;
  images:any;
  
  // styles


  // document.getElementById("btn1").onclick = function() {
  
  // }

 

  // styles ending
  constructor(private service: ImageService) { 
    var alphas:string[]; 
    alphas = ["1","2","3","4"] 
  }

  ngOnInit() {

    


    console.log("before sending ");
    this.service.getGalleryList().snapshotChanges().subscribe(
      list => {
        console.log("before sending ");
        this.imageList = list.map(item => { 
          const post = item.payload.val();
          post.key = item.key;
          return post; 
        });

        console.log("inside the gallery");
        this.images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
        this.photolength=this.imageList.length;
        this.rowIndexArray =  Array.from(Array(Math.ceil((this.imageList.length+1) / 2)).keys());
        this.imageslength=Array(this.imageList.length);
        console.log("after sending ");
        console.log(this.photolength);
      }
    );
    // this.imageList = this.service.getImageDetailList();
    this.service.topphotos().snapshotChanges().subscribe(
      list => {
        console.log("before sending ");
        this.topphotolist = list.map(item => { 
          const post = item.payload.val();
          post.key = item.key;
          return post; 
        });

      }
    );


  }

  first()
  {
    var element= document.getElementById("backgroundcard");
    // var p=this.topphotolist[0].imageUrl;
    // style.backgroundImage = "url('https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
    // element.setAttribute('style', 'background-image: url(https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) !important');
    element.setAttribute('style', 'background: url("../../../../assets/GALLERY (1).png"); background-repeat: no-repeat !important');
   

  }

second()
{
  var element= document.getElementById("backgroundcard");
  // var p=this.topphotolist[0].imageUrl;
  // style.backgroundImage = "url('https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
  // element.setAttribute('style', 'background-image: url(https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) !important');
  element.setAttribute('style', 'background: url("../../../../assets/GALLERY (2).png"); background-repeat: no-repeat !important');
 
  // console.log(this.topphotolist[0].imageUrl);
}
third()
{


  var element= document.getElementById("backgroundcard");
  // var p=this.topphotolist[0].imageUrl;
  // style.backgroundImage = "url('https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')";
  // element.setAttribute('style', 'background-image: url(https://images.pexels.com/photos/2456922/pexels-photo-2456922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) !important');
  element.setAttribute('style', 'background: url("../../../../assets/GALLERY (3).png"); background-repeat: no-repeat !important');
 
  // console.log(this.topphotolist[0].imageUrl);

}
  like(key,like)
  { console.log("hello");

    }

}

