$(document).ready(function () {
    setTimeout(function () {
        new TypeIt('#type-writer', {
        strings: ["UC Berkeley CS Major", "Rookie Triathlete", "Avid Bookworm", "Awe-inspired AI Researcher", "Lighthearted Companion"],
        speed: 200,
        nextStringDelay: 3000,
        deleteSpeed: 100, 
        autoStart: false, 
        breakLines: false,
        loopDelay: 5000,
        loop: true,
        }); 
    }, 1500);    
});

