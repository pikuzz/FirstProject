
import { Component , OnInit } from '@angular/core';
import { GithubService } from './services/github.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  
      user;
      followers;
  
      constructor(private githubservice: GithubService) {
      }
    
    ngOnInit(){}
    
  title = 'app';
  Search(x)
    {
      this.githubservice.getUser(x)
                        .subscribe((data)=>{
                            this.user = data;
                            console.log(this.user);
                        });

      this.githubservice.getFollowers(x).subscribe(item => {
        this.followers = item;
        console.log(this.followers);
      })
  }

  
}
