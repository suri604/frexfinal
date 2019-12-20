import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

//import { database } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  private url: string = environment.rewardServiceURL;
  
  imageDetailList: AngularFireList<any>;
  topphotolist:AngularFireList<any>;
  value: "checking update";
  
  key: string;
  username=localStorage.getItem("username");
  // username=thos;
    ref = this.firebase.database.ref('imageDetails');

  constructor(private firebase: AngularFireDatabase,private http: HttpClient) { }

  topphotos()
  {
    this.topphotolist = this.firebase.list('imageDetails',ref => ref.orderByChild('userid').limitToFirst(2).equalTo(this.username));
   
    return this.topphotolist;
  }

  isliked(key,map)
  { 
    // var test=[this.username,true];
    // console.log(test);
    console.log("inside isliked");
    console.log(map);
    
     if(map.has(this.username))
    {
      return true;
    }
    else
    {
      return false;
    }
  
  // };
  // return b;
}
  getImageDetailList() {
   
    this.imageDetailList = this.firebase.list('imageDetails',ref => ref.orderByChild('like'));
    // ref.child("users").orderByChild("profile/email").equalTo(email);
    // this.ref.on('child_added',(snapshot)=> {
    //   console.log(snapshot.key);
    //   this.key = snapshot.key;
    //   this.ref.child(this.key).update({
    //     caption: 'pdhsf'
    //   })
    // })
    return this.imageDetailList;
    

    console.log(this.firebase.list('imageDetails'));
    console.log("after image list erro");

  }
  likedbyList() {
   
    this.imageDetailList = this.firebase.list('imageDetails',ref => ref.orderByChild('like'));
 
    return this.imageDetailList;
    

    console.log(this.firebase.list('imageDetails'));
    console.log("after image list erro");

  }
  getGalleryList() {
   
    this.imageDetailList = this.firebase.list('imageDetails',ref => ref.orderByChild('userid').equalTo(this.username));
   

    return this.imageDetailList;
    

    console.log(this.firebase.list('imageDetails'));
    console.log("after image list erro");

  }
 
  increaselikes(key,prelike,map,name)
  {  console.log("before checking if statement");
    // console.log(JSON.parse(map));
    map = new Map(JSON.parse(map));
    console.log("this is the real map ");
    console.log(map);
    // map: Map=JSON.parse(map);
  
    this.ref = this.firebase.database.ref('imageDetails');
    // var path = this.firebase.database.ref('imageDetails.'+key);
    if(this.isliked(key,map))
    {

      console.log("goint into if");
      map.delete(this.username);
      map=JSON.stringify(Array.from(map.entries()));
      this.ref.child(key).update({
        like: prelike-1
      })
    
     
      console.log("not liked");
      // map.set(this.username,true);
      
      // map.set("karan")
      // this.ref.child(key).set({like: prelike-1},)
      this.ref.child(key).update({
        likedby:map
      })
      console.log("after the if statement of liked by ");
      
      console.log(map);
      
      // like:prelike+1;
      
    }
    else
    {
      console.log("goint into else");
      map.set(this.username,true);
      // console.log(JSON.parse(localStorage.myMap));
      // map.set("karan",true)
      map=JSON.stringify(Array.from(map.entries()));
      console.log("after adding new username statement in the else statement")
      console.log(map);
      // const obj = Object.fromEntries(map);
      // this.ref.child(key).set({like: prelike-1},)
      this.ref.child(key).update({
        likedby:map
      });
      this.ref.child(key).update({
        like:prelike+1
      });
      
        
      
      
      console.log("after the update");
      console.log(map);
      // like:prelike+1;
    }
 
     
      // console.log("heead");
      //to be posted

      return this.http.post(this.url + "/photo/rewards",
      {
          "username": name,
          "day": "sunday"
   
      })

      //to be posted

  }
 

  insertImageDetails(imageDetails) {
    console.log("insert error");
    this.getImageDetailList().push(imageDetails);
    console.log("insent image details ");
  }
  // updateItem(key: "caption", value: any): void {
  //   this.imageDetailList.update(key, this.value);
  // }
}