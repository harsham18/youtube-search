var menuIcon=document.querySelector(".menu");
var sidebar=document.querySelector(".sidebar");

var searchIcon=document.querySelector("#submit");

menuIcon.onClick=function(){
    sidebar.classList.toggle("small-sidebar");
}

searchIcon.renderVideo=function(){
    var s=document.querySelector(".search").value;
    var API_KEY="AIzaSyBckZt9c0QYTEn4c4HKiFJrOw4dK02pj6g";
    
    videosearch(API_KEY,s,15);
}
let video=[];
let videoData='';
function videosearch(key,search,max){
    video=[];
    fetch("https://www.googleapis.com/youtube/v3/search?key="+key+"&type=video&part=snippet&maxResults="+max+"&q="+search)
    .then(res=>res.json())
    .then(json=>{
        video=json;
        printVideo();
    });   
}

function printVideo(){
    videoData='';
    video.items.forEach(item => {
        videoData+=`<tr>
        <td><a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}"><img width="250" height="170" src="${item.snippet.thumbnails.high.url}"></a></td>
        <td><b><a target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}">${item.snippet.title}</a></b>
        <br><a style="font-size:14px;" target="_blank" href="https://www.youtube.com/channel/${item.snippet.channelId}">${item.snippet.channelTitle}</a>
        <br><a style="font-size:12px;" target="_blank" href="https://www.youtube.com/watch?v=${item.id.videoId}">${item.snippet.description}</a></td>
        <td> </td></tr>`
    });
    console.log(video);
    document.getElementById("table").innerHTML=videoData;
}
