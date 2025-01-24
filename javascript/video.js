const videosList = [
    { video: 'https://www.youtube.com/embed/nim9m-Gt330?si=g5a7ybEfDIE4JXmG', title: 'Terengganu Pulau Redang' },
    { video: 'https://www.youtube.com/embed/QGWUcRuwxc0?si=FRFTjJm6sCZyizcz', title: 'Penang View' },
    { video: 'https://www.youtube.com/embed/9SMF-Zo7TyU?si=zFSIoTnrZQZuOMTW', title: 'Perak View' },
    { video: 'https://www.youtube.com/embed/ETCCnXI-uGw?si=5EHqgYZyQR_vZeB2', title: 'Sabah View' }
];

document.getElementById('videosList').innerHTML = videosList.map(item => `
    <div class="list">
        <iframe 
            src="${item.video}" 
            class="list-video" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <h3 class="list-title">${item.title}</h3>
    </div>
`).join('');

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(vid => {
    vid.onclick = () => {
        videoList.forEach(remove => remove.classList.remove('active'));
        vid.classList.add('active');
        const src = vid.querySelector('.list-video').src;
        const title = vid.querySelector('.list-title').innerHTML;
        const mainVideoContainer = document.querySelector('.main-video-container');

        mainVideoContainer.innerHTML = `
            <iframe 
                src="${src}" 
                class="main-video" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <h3 class="main-vid-title">${title}</h3>
        `;
    };
});