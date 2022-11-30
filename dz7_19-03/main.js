const wrapper = document.querySelector('.wrapper')
wrapper.innerHTML = `
<div class = 'wrapperUser'>
</div>
`

async function getUsers() {
    try{
      const wrapperUser = document.querySelector('.wrapperUser')
      const result = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await result.json()
      data.forEach(posts => {
        console.log(posts,'posts')
        const card = document.createElement('div')
        card.innerHTML = `
        <div class='pictureForCards'>
        <img src="images//IMAGE.svg" alt="">
        <div>
          <div class="card">
          <div class= 'cardInfo'>
          <p class= 'title'>${posts.title}:</p>
          <p class = 'body'>${posts.body}</p>
          </img>
          </div>
          </div>
        `
        wrapperUser.append(card)
      });
  
    }catch(e) {
      console.log('error');
    }finally{
      console.log('finally');
    }
  }
  
  getUsers()
  