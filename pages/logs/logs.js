var util = require( '../../utils/util.js' )
Page( {
  data: {
    projects: [ { name: 'FinalScheduler（终极排班系统）', git: "https://github.com/giscafer/FinalScheduler" },
      { name: 'MoveSite（电影狙击手）', git: "https://github.com/giscafer/moviesite" },
      { name: 'Ponitor（价格监控）', git: "https://github.com/giscafer/Ponitor" },
      { name: 'hexo-theme-cafe（Hexo博客主题）', git: "https://github.com/giscafer/hexo-theme-cafe" },
      { name: 'ife-course-demo（百度前端学院）', git: "https://github.com/giscafer/ife-course-demo" }
    ]
  },
  onReady: function() {
    this.clickName();
  },
  clickName: function( e ) {
    var pros = this.data.projects;
    console.log( "#########################################################################################################" )
    console.log( "##                                               其他项目                                               ##" )
    console.log( "##-----------------------------------------------------------------------------------------------------##" )
    pros.forEach( function( item, index ) {
      console.log( "##        ", item.name + ":" + item.git )
    })
    console.log( "##                                                                                                     ##" )
    console.log( "#########################################################################################################" )
  }
})
