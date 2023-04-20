document.addEventListener('DOMContentLoaded', function(){

    const gitAPI = `https://api.github.com/users/ferv21`;
    
    const avatar = document.getElementById('perfil');
    const name = document.getElementById('nome');
    const username = document.getElementById('usuario');
    const reposit = document.getElementById('repositorios');
    const followers = document.getElementById('seguidores');
    const following = document.getElementById('seguindo');
    const linkPerfil = document.getElementById('linkperfil');

    fetch(gitAPI)
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
        
        avatar.src = json.avatar_url; 
        name.innerText = json.name;
        username.innerText = json.login; 
        reposit.innerText = json.public_repos; 
        followers.innerText = json.followers; 
        following.innerText = json.following; 
        linkPerfil.href = json.html_url; 
     
    })
})