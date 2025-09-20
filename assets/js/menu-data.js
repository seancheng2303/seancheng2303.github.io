const menuData = [
  {
    text: 'Home',
    icon: 'fas fa-home',
    link: 'pages/home.html'
  },
  {
    text: 'Games',
    icon: 'fas fa-gamepad',
    submenu: [
      {
        text: '2048',
        link: 'games/2048.html'
      },
      {
        text: 'Dada',
        link: 'games/dada.html'
      },
      {
        text: 'OOXX',
        link: 'games/OOXX.html'
      }
    ]
  },
  {
    text: 'About',
    icon: 'fas fa-info-circle',
    link: 'pages/about.html'
  }
];