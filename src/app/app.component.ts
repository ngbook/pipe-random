import { Component } from '@angular/core';

interface Img {
    pic: string,
    desc: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    imgs: Img[] = [
        {pic: 'pic1.jpg', desc: '家里随心摆拍'},
        {pic: 'pic2.jpg', desc: '拍摄于深圳南山科技园文化广场'},
        {pic: 'pic3.jpg', desc: '拍摄于上海外滩'},
        {pic: 'pic4.jpg', desc: '拍摄于深圳宝安西湾红树林'},
        {pic: 'pic5.jpg', desc: '拍摄于北京圆明园遗址'},
    ];
}
