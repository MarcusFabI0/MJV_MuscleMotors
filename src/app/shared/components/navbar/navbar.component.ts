import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const userJSON = this.authService.userAuth();
    if (userJSON) {
      this.user = JSON.parse(userJSON);
    } else {
      console.log('Usuário não encontrado.');
    }
  }

  logout() {
    this.authService.clearStorage();
    this.router.navigateByUrl('/login');
  }
}
