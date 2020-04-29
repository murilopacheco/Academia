import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Academia';

  isLoggedIn$: Observable<boolean>;                  // {1}

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  onLogout() {
    this.authService.logout();                      // {3}
  }

  toogleSideBar() {
    const classe: string = document.getElementById('sidebar').classList.value;
    if (classe === 'active') {
      document.getElementById('sidebar').classList.remove('active');
    } else {
      document.getElementById('sidebar').classList.add('active');
    }
  }
}
