let searchBtn = document.querySelector('#Searchbtn')
let searchUser = document.querySelector('#searchUser')

searchBtn.addEventListener('click', (e)=>{
    let userText = searchUser.value;
    if(userText != ''){
        fetch(`https://api.github.com/users/${userText}`)
            .then(res => res.json())
            .then(data =>{
                // console.log(data)
                if(data.message == 'Not Found'){
                    console.log('data is not find')
                }else{
                    console.log(data)
                }
            })
    }else{
        alert('please input')
    }
})