console.log("hello world")

// swicth statement 
// const Students = {
//     name: "Arzoo",
//     RollNumber: 257774,
//     fieldOfstudy: "WMA"
// }

const students = [
    {
        id: 1,
        name: "Arzoo",
        fatherName: "shamim",
        rollNumber: 257774,
        Course: "WMA",
        Followers: 96,
        Projects: 566,
        Ranks: 742,
        profile: 'https://notjustaheadshot.com/wp-content/uploads/2022/06/LinkedIn-headshot-hong-kong-woman.jpg',
        coverImage: 'https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/laptop-working-header.jpg?ssl=1',
    },
    {
        id: 2,
        name: "Zona",
        fatherName: "Sharike",
        rollNumber: 228956,
        Course: "WMA",
        Followers: 42,
        Projects: 142,
        Ranks: 126,
        profile: 'https://img.freepik.com/premium-photo/cute-girl-illustration_363897-1882.jpg',
        coverImage: 'https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/woman-laptop-header.jpg?ssl=1'
    },
    {
        id: 3,
        name: "Amirah",
        fatherName: "Ilhaj",
        rollNumber: 225689,
        Course: "WMA",
        Followers: 710,
        Projects: 11,
        Ranks: 122,
        profile: 'https://images-pw.pixieset.com/elementfield/36654628/female_headshot_brunette-38f82772.jpg',
        coverImage: 'https://i0.wp.com/linkedinheaders.com/wp-content/uploads/2018/02/journal-keyboard-header.jpg?resize=1024%2C256&ssl=1',
    },
    {
        id: 4,
        name: "Alishba",
        fatherName: "Rehmat",
        rollNumber: 226899,
        Course: "WMA",
        Followers: 450,
        Projects: 55,
        Ranks: 10,
        profile: 'https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-292.jpg',
        coverImage: 'https://www.shutterstock.com/image-photo/white-office-desk-table-laptop-260nw-627481775.jpg',
    },
    {
        id: 5,
        name: "Maham",
        fatherName: "Kamal",
        rollNumber: 225689,
        Course: "WMA",
        Followers: 280,
        Projects: 48,
        Ranks: 11,
        profile: 'https://anyanglephotography.com/wp-content/uploads/2022/01/rachelhr-102-scaled.jpg',
        coverImage: 'https://marketplace.canva.com/EAE1oe3H6Sc/1/0/1600w/canva-black-elegant-minimalist-profile-linkedin-banner-nc0eALdRvKU.jpg',
    },
    {
        id: 6,
        name: "Somaira",
        fatherName: "Ameen",
        rollNumber: 227895,
        Course: "WMA",
        Followers: 250,
        Projects: 15,
        Ranks: 14,
        profile: 'https://images.squarespace-cdn.com/content/v1/55f97542e4b0bd73ff1920e7/ea1bb1bd-ecc0-4aab-8633-159dd04ca022/Jena_Teeling5619_HiRes.jpg',
        coverImage: 'https://media.licdn.com/dms/image/v2/C4E1BAQHB47OXQ5Fi3g/company-background_10000/company-background_10000/0/1584509711592/markdesoft_cover?e=2147483647&v=beta&t=NNDwofQnu34KQYvsloXTdiildSzN7HFgYm2Q2S_O5yg',
    },
]


const perant = document.getElementById('perant')
for (var i = 0; i < students.length; i++) {
    // console.log(students[i].name)
    // switch (students[i].name) {
    //     case ("Arzoo"): console.log("your father name is " + students[i].fatherName)
    //         break;
    //     case ("Zona"): console.log("your father name is " + students[i].fatherName)
    //         break;
    //     case ("Amirah"): console.log("your father name is " + students[i].fatherName)
    //         break;
    //     case ("Alishba"): console.log("your father name is " + students[i].fatherName)
    //         break;
    //     case ("Maham"): console.log("your father name is " + students[i].fatherName)
    //         break;
    //     default: console.log("you are not student")
    // }




    console.log("perant", students[i].name)
    perant.innerHTML += `

  <div class="card mb-5">

         <div class="upper">

           <img src="${students[i].coverImage}" class="img-fluid">
           
         </div>

         <div class="user text-center">

           <div class="profile">

             <img src="${students[i].profile}" class="rounded-circle" width="80">
             
           </div>

         </div>


         <div class="mt-5 text-center">

           <h4 class="mb-0">${students[i].name + ' ' + students[i].fatherName}</h4>
           <span class="text-muted d-block mb-2">${students[i].Course}</span>

           <button class="btn btn-primary btn-sm follow" onClick="follow(this)">Follow</button>


           <div class="d-flex justify-content-between align-items-center mt-4 px-4">

             <div class="stats">
               <h6 class="mb-0">Followers</h6>
               <span id="folowersCount">${students[i].Followers}</span>

             </div>


             <div class="stats">
               <h6 class="mb-0">Projects</h6>
               <span>${students[i].Projects}</span>

             </div>


             <div class="stats">
               <h6 class="mb-0">Ranks</h6>
               <span>${students[i].Ranks}</span>

             </div>
             
           </div>
           
         </div>
          
        </div>

`






}


let folowersCount = document.getElementById('folowersCount')
let clicked = true;
const follow = (element) => {
    console.log("follow", folowersCount)
    if (clicked === true) {
        folowersCount.innerText++
        element.innerHTML = "unfollow"
        clicked = false
    } else {
        folowersCount.innerText--
        element.innerHTML = "follow"
        clicked = true
    }
}

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }