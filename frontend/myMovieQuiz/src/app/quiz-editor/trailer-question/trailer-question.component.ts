import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TrailerSearchService } from './trailer-search.service'

@Component({
  selector: 'app-trailer-question',
  templateUrl: './trailer-question.component.html',
  styleUrls: ['./trailer-question.component.css']
})

export class TrailerQuestionComponent implements OnInit {

  @Input() quizedMovie;
  
  isTrailer = false
  imageSource: any
  videoSource: any

    
  constructor(private trailerSearchService: TrailerSearchService) { }

  ngOnInit() {
    this.getTrailer()      
  }

  takePicture() {
    var canvas = <HTMLCanvasElement>document.getElementById("canvas");
    var ctx = canvas.getContext("2d"); 
    canvas.width = 480;
    canvas.height = 360;
    const vid = document.getElementById('singleVideo') as HTMLVideoElement
    ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
    var img = new Image(); 
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = canvas.toDataURL()    
    this.imageSource= img.src  
  }

  getTrailer() {
    console.log(this.quizedMovie.trailer.id)
    this.trailerSearchService.getTrailer(this.quizedMovie.trailer.id)
      .subscribe(r=> { this.videoSource = r
                      console.log(r)})
    
  }
} 
