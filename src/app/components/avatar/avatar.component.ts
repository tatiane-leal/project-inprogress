import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() hasBorder: boolean = false;

  avatarUrl = 'https://github.com/tatiane-leal.png';
}
