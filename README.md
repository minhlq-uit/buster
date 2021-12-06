# Buster là một trang web xem phim online

## Công nghệ sử dụng
- Front-end: HTML, SCSS, Javascript, ReactJS
- Back-end: NodeJS, MongoDB
- Các web API được sử dụng để lấy dữ liệu phim, tin tức:
[TMDB](https://developers.themoviedb.org/3),
[Nytimes](https://www.nytimes.com/),
[2Embed](https://www.2embed.ru/)

## Sử dụng project
### Những thứ cần cài đặt trước:
- Git Bash
- Visual Studio Code
- NodeJS

### Tiến hành chạy source code:
#### Clone git repository
Mở terminal tại thư mục muốn đặt source code

`git clone https://github.com/minhlq-uit/buster.git`
#### Chạy code
- Tiếp tục ở terminal vừa clone git repository về<br/>
`cd buster`<br/>
`npm i`<br/>
`npm start`<br/>
Code front-end được chạy ở port 3000
- Chạy code back-end. Thêm 1 terminal mới<br/>
`cd BackEnd`<br/>
`npm i`<br/>
`npm run server`<br/>
Code back-end được chạy ở port 5000