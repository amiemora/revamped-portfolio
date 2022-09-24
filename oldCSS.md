.App {
  text-align: center;
  background-color: black;
  
}
.avatar {
  width: 4em;
  height: 4em;
  border-radius: 10px;
  float: left;
  margin-top: .5em;
  margin-left: .5em;
}

@keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

.avatar:hover {
  animation: tilt-shaking 0.25s infinite;
}




.header {
  border: solid 2px yellow;
  height: 5em;
}
.nav-btn {
  width: 6em;
  height: 30px;
  border: none;
  outline: none;
  color: yellow;
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  margin-top: 1em;
  margin-right: .5em;
  float: right;
  font-family: 'Quicksand', sans-serif;
}
.nav-btn:before {
  content: '';
  background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 0;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}
.nav-btn:active {
  color: #000
}
.nav-btn:active:after {
  background: transparent;
}
.nav-btn:hover:before {
  opacity: 1;
}
.nav-btn:after {
  z-index: -1;
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #111;
  left: 0;
  top: 0;
  border-radius: 10px;
}
@keyframes glowing {
  0% { background-position: 0 0; }
  50% { background-position: 400% 0; }
  100% { background-position: 0 0; }
}



    <header className='header'>
        
        <img src="https://i.imgur.com/dcbYgL9.jpg[/img]" alt="Avatar" className="avatar"/>
        <button className='nav-btn'>HOME</button>
        <button className='nav-btn'>ABOUT</button>
        <button className='nav-btn'>RESUME</button>
        <button className='nav-btn'>PROJECTS</button>
        <button className='nav-btn'>CONTACT</button>

        <i class="fa-solid fa-envelope fa-2xl"></i>
        <i class="fa-solid fa-person-chalkboard fa-2xl"></i>
        <i class="fa-solid fa-receipt fa-2xl"></i>
        <i class="fa-solid fa-book-open-reader fa-2xl"></i>
        <i class="fa-solid fa-house fa-2xl fa-2xl"></i>
      
      </header>


        <div>
              <nav className="fixed-bottom">
            <div className="container-fluid">
                <li className="footer">
                    <a  href="https://github.com/amiemora"><i className="fa-brands fa-github fa-2xl"></i></a>
                </li>
                <li className="footer">
                    <a href="https://www.linkedin.com/in/amie-morales-101b38223/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                </li> 
                <li className="footer">
                    <a href="https://www.instagram.com/fullstackamie/"><i class="fa-brands fa-instagram fa-2xl"></i></a>
                </li> 
            </div>
        </nav>
        </div>


<img className="comp-img" src='https://media.istockphoto.com/vectors/coding-and-programming-app-in-laptop-for-web-developer-concept-based-vector-id1208331137?k=20&m=1208331137&s=170667a&w=0&h=2xWEFHrd_JPFb_8NRuJgzDsiJlfhzvhLwwG-FPjgSrQ='/>



   <header className='header'>
      <img src="https://i.imgur.com/dcbYgL9.jpg[/img]" alt="Avatar" className="avatar"/>
      <button className='nav-btn'>HOME</button>
      <button className='nav-btn'>ABOUT</button>
      <button className='nav-btn'>RESUME</button>
      <button className='nav-btn'>PROJECTS</button>
      <button className='nav-btn'>CONTACT</button>
    </header>


.body {
  border: solid 2px red;
  height: 50em;
  color: yellow;
  background: radial-gradient(circle at 24.1% 68.8%, rgb(50, 50, 50) 0%, rgb(0, 0, 0) 99.4%);
}
.h1-name {
  margin-top: 1em;
  font-family: 'Barlow Semi Condensed', sans-serif;
}








.fixed-bottom {
  background-color: black;
  height: 5em;
}
.footer {
  list-style: none;
  display: inline;
  
}

i {
  margin-right: .5em;
  margin-top: 1em;
  color: yellow;
  margin-left: .5em;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

  <nav className="fixed-bottom">
            <div className="container-fluid">
                <li className="footer">
                    <a  href="https://github.com/amiemora"><i className="fa-brands fa-github fa-2xl"></i></a>
                </li>
                <li className="footer">
                    <a href="https://www.linkedin.com/in/amie-morales-101b38223/"><i class="fa-brands fa-linkedin fa-2xl"></i></a>
                </li> 
            </div>
        </nav>



          <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
    background-position: 50%;
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
    height: 350px;
  ">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
          <h3 class="text-3xl font-bold mb-8">Subeading</h3>
          <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>

