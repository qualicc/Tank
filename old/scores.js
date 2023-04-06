function fetchScore(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'connection.php', true);

    xhr.onload = function(){
        console.log(this.responseText);

        scoreData = JSON.parse(this.responseText);

        var output = '<ol>';

        for (var i in scoreData){
            output += '<li><span class="name">' + scoreData[i].name + '</span><span>score: ' + scoreData[i].score + ' clicks</span></li>';
        }

        output += '</ol>';

        document.querySelector('#highScore').innerHTML = output;
    }

    xhr.send();
}

function sendScore(game,person,score){
    let xhr = new XMLHttpRequest();

    let params = "game=" + game + "&name=" + person + "&score=" + score;

    xhr.open('POST', 'addscore.php', true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');

    xhr.onload = function(){
        fetchScore();
    }

    xhr.send(params);
}