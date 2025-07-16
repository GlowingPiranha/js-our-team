const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const generateCard = (member) => {

  const { img, name, role, email } = member;

  const memberCard = `<div class="col">
        <div class="card mb-3" style="max-width: 540px;">
          <div class="row g-0 bg-dark text-white">
            <div class="col-md-4">
              <img src="assets/${img}" class="img-fluid" alt="image">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${role}</p>
                <p class="card-text">
                  <a href="mailTo:${email}">${email}</a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>`

  return memberCard;
}

const teamContainer = document.getElementById('team-members')

for (let i = 0; i < teamMembers.length; i++) {
  let card = generateCard(teamMembers[i]);

  teamContainer.innerHTML += card;
}

