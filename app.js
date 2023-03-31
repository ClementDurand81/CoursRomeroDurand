const btn = document.querySelector('form')
btn.addEventListener('submit',function(e) {
  e.preventDefault();
  const login = document.getElementById('login').value
  const pwd = document.getElementById('pwd').value
  if(login == 'web' && pwd == 'web'){
    alert('Connexion réussie')
  } else {
    alert('Connexion Echoué')
  }
})