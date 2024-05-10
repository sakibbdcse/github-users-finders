class UI {
    constructor(){
        this.profile = document.querySelector('#profile')
    }
    showProfile(user){
        this.profile.innerHTML =`
        <div class="container my-5">
                    <div class="row d-flex justify-content-center">
                        <div class="main-card col-md-6">
                            <div class="card p-3 py-4">
                                <div class="img-div m-auto">
                                    <img class="rounded-circle p-2"
                                        src="${user.avatar_url}">
                                </div>
                                <div class="text-center mt-3">
                                    <span class="coustom-bg p-1 px-4 rounded text-white">${user.type}</span>
                                    <h5 class="mt-2 mb-0">${user.name}</h5>
                                    <span>${user.bio}</span>
                                    <div class="px-4 mt-1">
                                        <p class="fonts">${user.company}</p>
                                        <p class="fonts">${user.location}</p>
                                    </div>
                                    <ul class="social-list">
                                        <li><a href=""><i class="fa-brands fa-facebook"></i></a></li>
                                        <li><a href=""><i class="fa-brands fa-x-twitter"></i></a></li>
                                        <li><a href=""><i class="fa-brands fa-instagram"></i></a></li>
                                        <li><a href=""><i class="fa-brands fa-linkedin"></i></a></li>
                                        <li><a href=""><i class="fa-brands fa-google"></i></a></li>
                                    </ul>
                                    <div class="buttons">
                                        <button class="btn btn-outline-primary px-4">Message</button>
                                        <button class="btn btn-primary px-4 ms-3">Contact</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }

    clearProfile(){
        this.profile.innerHTML = '';
    }

    showAlert(message, className) {
        let div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));
    
        let container = document.querySelector('.searchContainer');
        let search = document.querySelector('.search');
    
        // Check if both container and search elements exist and if search is a child of container
        if (container && search && container.contains(search)) {
            container.insertBefore(div, search);
        } else {
            // If search element not found or not a child of container, append div to container
            container.appendChild(div);
        }
    }
    
    
    
    
}