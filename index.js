
let data = null;

const date = new Date();
const month = date.getMonth();
const month_string = numtomonth(month+1);
const year = date.getFullYear();
const monthdate = date.getDate();

document.getElementById("dateandtimetext").textContent = ` ${month_string} ${monthdate}, ${year}`;

let appendid = ["assign1", "assign2", "assign3", "assign4", "assign5", "assign6", "assign7", "assign8", "assign9", "assign10"];



const searchicon = document.querySelector(".searchicon");
const icon = document.querySelector(".icon");

searchicon.addEventListener("mouseover", () => {
    const searchbar = document.getElementById("searchbar");
    searchicon.style.width = "25%";
        searchbar.style.display = "inline";
});

searchicon.addEventListener("mouseleave", () => {
    const searchbar = document.getElementById("searchbar");
    searchbar.style.display = "none";
    searchicon.style.width = "3%";

});


function numtomonth(value) {
    switch(value){
          case 1: return "January";
          case 2: return "February";
          case 3: return "March";
          case 4: return "April";
          case 5: return "May";
          case 6: return "June";
          case 7: return "July";
          case 8: return "August";
          case 9: return "September";
          case 10: return "October";
          case 11: return "November";
          case 12: return "December";
    }
 }



const latest = document.getElementById("latest");
const popular = document.getElementById("popular");


popular.addEventListener("mouseover", () => {
 
    popular.style.cursor = "pointer";
});

popular.addEventListener("mouseleave", () => {
   
        popular.style.cursor = "default";
    
});



popular.addEventListener("click", () => {
    latest.style.backgroundColor = "rgb(243,243,243)";
    latest.style.color = "black";
    latest.style.opacity = "50%";

    popular.style.backgroundColor = "black";
    popular.style.opacity = "100%";
    popular.style.color = "white";

    popular.classList.add('active');
    latest.classList.remove('active');


    const scroller = document.querySelector(".scroller");
    scroller.innerHTML = '';



    for(i=0; i<10; i++){
        const backgroundImage = data[i].image;
        const tag = data[i].type;
        const author = data[i].author;
        const date = data[i].date;
        const headline = data[i].headline;

        const parts = date.split("-");

        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        const date_string = numtomonth(month);
        
        const newDiv = document.createElement("div");
        newDiv.id = appendid[i];
        newDiv.classList.add("appendcontent");
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("appendcontent_image")
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("appendcontent_context")

        const topDiv = document.createElement("div");
        const bottomDiv = document.createElement("div");
        topDiv.classList.add("ac_top");
        bottomDiv.classList.add("ac_bottom");

        leftDiv.style.backgroundImage = `url(${backgroundImage})`;
        leftDiv.style.backgroundSize = "cover";
        leftDiv.style.backgroundRepeat = "no-repeat";
        leftDiv.style.backgroundPosition = "center";
        
        topDiv.textContent = `${headline}`;
        bottomDiv.textContent = `🗓️  ${date_string}  ${day},${year}`;

        rightDiv.appendChild(topDiv);
        rightDiv.appendChild(bottomDiv);
        
        newDiv.appendChild(leftDiv);
        newDiv.appendChild(rightDiv);

        document.querySelector(".scroller").appendChild(newDiv);

      }
    
            
});



latest.addEventListener("mouseover", () => {
            
    latest.style.cursor = "pointer";
    
});

latest.addEventListener("mouseleave", () => {

        latest.style.cursor = "default";
    
});


latest.addEventListener("click", () => {
    latest.style.backgroundColor = "black";
    latest.style.color = "white";
    latest.style.opacity = "100%";

    popular.style.backgroundColor = "rgb(243,243,243)";
    popular.style.opacity = "50%";
    popular.style.color = "black";

    latest.classList.add('active');
    popular.classList.remove('active');



    const scroller = document.querySelector(".scroller");
    scroller.innerHTML = '';



    for(i=9; i>=0; i--){
        const backgroundImage = data[i].image;
        const tag = data[i].type;
        const author = data[i].author;
        const date = data[i].date;
        const headline = data[i].headline;

        const parts = date.split("-");

        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        const date_string = numtomonth(month);
        
        const newDiv = document.createElement("div");
        newDiv.id = appendid[i];
        newDiv.classList.add("appendcontent");
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("appendcontent_image")
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("appendcontent_context")

        const topDiv = document.createElement("div");
        const bottomDiv = document.createElement("div");
        topDiv.classList.add("ac_top");
        bottomDiv.classList.add("ac_bottom");

        leftDiv.style.backgroundImage = `url(${backgroundImage})`;
        leftDiv.style.backgroundSize = "cover";
        leftDiv.style.backgroundRepeat = "no-repeat";
        leftDiv.style.backgroundPosition = "center";
        
        topDiv.textContent = `${headline}`;
        bottomDiv.textContent = `🗓️  ${date_string}  ${day},${year}`;

        rightDiv.appendChild(topDiv);
        rightDiv.appendChild(bottomDiv);
        
        newDiv.appendChild(leftDiv);
        newDiv.appendChild(rightDiv);

        document.querySelector(".scroller").appendChild(newDiv);

      }
    
     
});




fetch('https://coding-week-2024-api.onrender.com/api/data')
     .then(Response => {
         if(!Response.ok){
            throw new Error('Could not fetch pai');
            
         }
         return Response.json();
     })
      .then(dataget => {
        data = dataget;
        blog(data);
      })
      .catch(error =>{
             console.error("Error:", error);
      });






const blog = (data) => {
      for(i=0; i < 4; i++){
        const backgroundImage = data[i].image;
        const tag = data[i].type;
        const author = data[i].author;
        const date = data[i].date;
        const headline = data[i].headline;

        const parts = date.split("-");

        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        const date_string = numtomonth(month);
        
        document.getElementById(`mc${i+1}`).style.backgroundImage = `url(${backgroundImage})`;
        document.getElementById(`mc${i+1}`).style.backgroundSize = "cover";
        document.getElementById(`mc${i+1}`).style.backgroundRepeat = "no-repeat";
        // document.getElementById(`mc${i+1}`).style.backgroundPosition = "center";
        document.getElementById(`mc${i+1}`).style.opacity = "1";
        document.getElementById(`mc${i+1}_culture`).textContent = `${tag}`;
        document.getElementById(`mc${i+1}_context`).textContent = `${headline}`;
        document.getElementById(`mc${i+1}_author`).textContent = `${author}`;
        

        document.getElementById(`mc${i+1}_date`).textContent = `🗓️ ${date_string} ${day} , ${year}`;

      }



      for(i=9; i>=0; i--){
        const backgroundImage = data[i].image;
        const tag = data[i].type;
        const author = data[i].author;
        const date = data[i].date;
        const headline = data[i].headline;

        const parts = date.split("-");

        const year = parseInt(parts[0]);
        const month = parseInt(parts[1]);
        const day = parseInt(parts[2]);

        const date_string = numtomonth(month);
        
        const newDiv = document.createElement("div");
        newDiv.id = appendid[i];
        newDiv.classList.add("appendcontent");
        const leftDiv = document.createElement("div");
        leftDiv.classList.add("appendcontent_image")
        const rightDiv = document.createElement("div");
        rightDiv.classList.add("appendcontent_context")

        const topDiv = document.createElement("div");
        const bottomDiv = document.createElement("div");
        topDiv.classList.add("ac_top");
        bottomDiv.classList.add("ac_bottom");

        leftDiv.style.backgroundImage = `url(${backgroundImage})`;
        leftDiv.style.backgroundSize = "cover";
        leftDiv.style.backgroundRepeat = "no-repeat";
        leftDiv.style.backgroundPosition = "center";
        
        topDiv.textContent = `${headline}`;
        bottomDiv.textContent = `🗓️  ${date_string}  ${day},${year}`;

        rightDiv.appendChild(topDiv);
        rightDiv.appendChild(bottomDiv);
        
        newDiv.appendChild(leftDiv);
        newDiv.appendChild(rightDiv);

        document.querySelector(".scroller").appendChild(newDiv);

      }
}


const maincontainer = document.querySelector(".maincontent");
const mcfirst = document.getElementById("mc1");
const mcsecond = document.getElementById("mc2");
const mcthird = document.getElementById("mc3");
const mcfourth = document.getElementById("mc4");
const mcproblem = document.querySelector(".mcthird");
const indicator = document.querySelectorAll(".indicators");
const content = document.querySelector(".content");
const sidecontent = document.querySelector(".sidecontent")
const scroller = document.querySelector(".scroller");

const culture = document.querySelectorAll(".culture");
const featured = document.querySelectorAll(".featured");
const context = document.querySelectorAll(".context");

let boolean = true;


mcfirst.addEventListener("click" , ()=> {
    
    if(!boolean){

       mcfirst.style.width = "43%";
       mcfirst.style.backgroundSize = "cover";
       mcfirst.style.backgroundRepeat = "no-repeat";
       mcfirst.style.backgroundPosition = "unset";
    culture.forEach((element) => {
        element.style.display = "inline-block";
    });

    featured.forEach((element) => {
        element.style.display = "inline-block";
    });

    context.forEach((element) => {
        element.style.display = "-webkit-box";
    });
    indicator.forEach((element) => {
        element.style.marginTop = "auto";
        element.style.backgroundColor = "";
        element.style.textAlign = "";
        element.style.height = "";
        element.style.display = "";
        element.style.flexDirection = "";
        element.style.alignItems = "";
    });
       mcfirst.style.textAlign = "";
       mcfirst.style.alignItems = "";
       
      const thread = document.getElementById("specialthread");
      thread.remove();
       
     mcsecond.style.display = "flex";
     mcthird.style.display = "flex";
     mcfourth.style.display = "flex";
     mcproblem.style.display = "flex";


    }



    if(boolean){
           mcfirst.style.width = "100%";
           mcfirst.style.backgroundPosition = "center";
        culture.forEach((element) => {
            element.style.display = "none";
        });
        featured.forEach((element) => {
            element.style.display = "none";
        });
        context.forEach((element) => {
            element.style.display = "none";
        });
        indicator.forEach((element) => {
            element.style.marginTop = "15px";
            element.style.backgroundColor = "rgba(0,0,0,0.2)";
            element.style.textAlign = "center";
            element.style.height = "20%";
            element.style.display = "flex";
            element.style.flexDirection = "column";
            element.style.alignItems = "center";
            
        });
           mcfirst.style.textAlign = "center";
           mcfirst.style.alignItems = "center";
           
        
              

           const thread = document.createElement("div");
           thread.id = "specialthread";
           thread.classList.add("context");
           thread.style.maxWidth = "60%";
           thread.textContent = data[0].content;
           thread.style.backdropFilter = "blur(3px)";
           thread.style.backgroundColor = "rgba(0,0,0,0.3)";
           thread.style.padding = "10px";
           
          
           
        //    thread.style.marginTop = "auto";

           mcfirst.prepend(thread);
           //OMG SEND HEKP WHY IS THIS WORKING IDFK AHHHHHHHHHHH
      
        //    maincontainer.style.justifyContent = "center";
           mcsecond.style.display = "none";
           mcthird.style.display = "none";
           mcfourth.style.display = "none";
           mcproblem.style.display = "none";
    }

    boolean = !boolean;

});


let boolean2 = true;

mcsecond.addEventListener("click" , ()=> {
    
    if(!boolean2){

       mcsecond.style.width = "25%";
       mcsecond.style.backgroundSize = "cover";
       mcsecond.style.backgroundRepeat = "no-repeat";
       mcsecond.style.backgroundPosition = "unset";

    culture.forEach((element) => {
        element.style.display = "inline-block";
    });
    featured.forEach((element) => {
        element.style.display = "inline-block";
    });
    context.forEach((element) => {
        element.style.display = "-webkit-box";
    });
    indicator.forEach((element) => {
        element.style.marginTop = "auto";
        element.style.backgroundColor = "";
        element.style.textAlign = "";
        element.style.height = "";
        element.style.display = "";
        element.style.flexDirection = "";
        element.style.alignItems = "";
    });
    
      // indicator.style.marginTop = "auto"; Why does this line cause so much problem if left enabled bruh. Will figure out later.
       mcsecond.style.textAlign = "";
       mcsecond.style.alignItems = "";
       
      const thread = document.getElementById("specialthread");
      thread.remove();
       
     mcfirst.style.display = "flex";
     mcthird.style.display = "flex";
     mcfourth.style.display = "flex";
     mcproblem.style.display = "flex";


    }



    if(boolean2){
           mcsecond.style.width = "100%";
           mcsecond.style.backgroundPosition = "center";
        culture.forEach((element) => {
            element.style.display = "none";
        });
        featured.forEach((element) => {
            element.style.display = "none";
        });
        context.forEach((element) => {
            element.style.display = "none";
        });
        indicator.forEach((element) => {
            element.style.marginTop = "15px";
            element.style.backgroundColor = "rgba(0,0,0,0.2)";
            element.style.textAlign = "center";
            element.style.height = "20%";
            element.style.display = "flex";
            element.style.flexDirection = "column";
            element.style.alignItems = "center";
        });
        
           mcsecond.style.textAlign = "center";
           mcsecond.style.alignItems = "center";
           mcsecond.style.justifyContent = "center";
           
        //    mcfirst.style.Filter = "blur(5px)";
              

           const thread = document.createElement("div");
           thread.id = "specialthread";
           thread.classList.add("context");
           thread.style.backgroundColor = "rgba(0,0,0,0.3)";
           thread.textContent = data[1].content;
           thread.style.padding = "10px";
           thread.style.maxWidth = "60%";
           thread.style.backdropFilter = "blur(3px)";
           

        //    thread.style.marginTop = "auto";

           mcsecond.prepend(thread);
           //OMG SEND HEKP WHY IS THIS WORKING IDFK AHHHHHHHHHHH
      
        //    maincontainer.style.justifyContent = "center";
           mcfirst.style.display = "none";
           mcthird.style.display = "none";
           mcfourth.style.display = "none";
           mcproblem.style.display = "none";
    }

    boolean2 = !boolean2;

});



let boolean3 = true;

mcthird.addEventListener("click" , ()=> {
    
    if(!boolean3){

       mcproblem.style.width = "25%";
       mcthird.style.width = "";
       mcthird.style.height = "47%";
       mcthird.style.backgroundSize = "cover";
       mcthird.style.backgroundRepeat = "no-repeat";
       mcthird.style.backgroundPosition = "unset";

    culture.forEach((element) => {
        element.style.display = "inline-block";
    });
    featured.forEach((element) => {
        element.style.display = "inline-block";
    });
    context.forEach((element) => {
        element.style.display = "-webkit-box";
    });
    indicator.forEach((element) => {
        element.style.marginTop = "auto";
        element.style.backgroundColor = "";
        element.style.textAlign = "";
        element.style.height = "";
        element.style.display = "";
        element.style.flexDirection = "";
        element.style.alignItems = "";
    });
    
      // indicator.style.marginTop = "auto"; Why does this line cause so much problem if left enabled bruh. Will figure out later.
       mcthird.style.textAlign = "";
       mcthird.style.alignItems = "";
       
      const thread = document.getElementById("specialthread");
      thread.remove();
       
     mcfirst.style.display = "flex";
     mcsecond.style.display = "flex";
     mcfourth.style.display = "flex";

    }



    if(boolean3){
           mcthird.style.width = "100%";
           mcthird.style.height = "100%";
           mcproblem.style.width = "100%";
           mcproblem.style.height = "100%";
           mcthird.style.backgroundPosition = "center";

        culture.forEach((element) => {
            element.style.display = "none";
        });
        featured.forEach((element) => {
            element.style.display = "none";
        });
        context.forEach((element) => {
            element.style.display = "none";
        });
        indicator.forEach((element) => {
            element.style.marginTop = "15px";
            element.style.backgroundColor = "rgba(0,0,0,0.2)";
            element.style.textAlign = "center";
            element.style.height = "20%";
            element.style.display = "flex";
            element.style.flexDirection = "column";
            element.style.alignItems = "center";
        });
        
           mcthird.style.textAlign = "center";
           mcthird.style.alignItems = "center";
           mcthird.style.justifyContent = "center";
           
        //    mcfirst.style.Filter = "blur(5px)";
              

           const thread = document.createElement("div");
           thread.id = "specialthread";
           thread.classList.add("context");
           thread.style.maxWidth = "60%";
           thread.textContent = data[2].content;
           thread.style.padding = "10px";
           thread.style.maxWidth = "60%";
           thread.style.backdropFilter = "blur(3px)";
           
        //    thread.style.marginTop = "auto";

           mcthird.prepend(thread);
           //OMG SEND HEKP WHY IS THIS WORKING IDFK AHHHHHHHHHHH
      
        //    maincontainer.style.justifyContent = "center";
           mcfirst.style.display = "none";
           mcsecond.style.display = "none";
           mcfourth.style.display = "none";
    }

    boolean3 = !boolean3;

});




let boolean4 = true;

mcfourth.addEventListener("click" , ()=> {
    
    if(!boolean4){

       mcproblem.style.width = "25%";
       mcfourth.style.width = "";
       mcfourth.style.height = "47%";
       mcfourth.style.backgroundSize = "cover";
       mcfourth.style.backgroundRepeat = "no-repeat";
       mcfourth.style.backgroundPosition = "unset";

    culture.forEach((element) => {
        element.style.display = "inline-block";
    });
    featured.forEach((element) => {
        element.style.display = "inline-block";
    });
    context.forEach((element) => {
        element.style.display = "-webkit-box";
    });
    indicator.forEach((element) => {
        element.style.marginTop = "auto";
        element.style.backgroundColor = "";
        element.style.textAlign = "";
        element.style.height = "";
        element.style.display = "";
        element.style.flexDirection = "";
        element.style.alignItems = "";
    });
    
      // indicator.style.marginTop = "auto"; Why does this line cause so much problem if left enabled bruh. Will figure out later.
       mcfourth.style.textAlign = "";
       mcfourth.style.alignItems = "";
       
      const thread = document.getElementById("specialthread");
      thread.remove();
       
     mcfirst.style.display = "flex";
     mcsecond.style.display = "flex";
     mcthird.style.display = "flex";

    }



    if(boolean4){
           mcfourth.style.width = "100%";
           mcfourth.style.height = "100%";
           mcproblem.style.width = "100%";
           mcproblem.style.height = "100%";
           mcfourth.style.backgroundPosition = "center";

        culture.forEach((element) => {
            element.style.display = "none";
        });
        featured.forEach((element) => {
            element.style.display = "none";
        });
        context.forEach((element) => {
            element.style.display = "none";
        });
        indicator.forEach((element) => {
            element.style.marginTop = "15px";
            element.style.backgroundColor = "rgba(0,0,0,0.2)";
            element.style.textAlign = "center";
            element.style.height = "20%";
            element.style.display = "flex";
            element.style.flexDirection = "column";
            element.style.alignItems = "center";
        });
        
           mcfourth.style.textAlign = "center";
           mcfourth.style.alignItems = "center";
           mcfourth.style.justifyContent = "center";
           
        //    mcfirst.style.Filter = "blur(5px)";
              

           const thread = document.createElement("div");
           thread.id = "specialthread";
           thread.classList.add("context");
           thread.style.maxWidth = "60%";
           thread.style.padding = "10px";
           thread.style.maxWidth = "60%";
           thread.style.backdropFilter = "blur(3px)";
           thread.textContent = data[2].content;
        //    thread.style.marginTop = "auto";

           mcfourth.prepend(thread);
           //OMG SEND HEKP WHY IS THIS WORKING IDFK AHHHHHHHHHHH
      
        //    maincontainer.style.justifyContent = "center";
           mcfirst.style.display = "none";
           mcsecond.style.display = "none";
           mcthird.style.display = "none";
    }

    boolean4 = !boolean4;

});


let update_track = false;


function checkcondition(event){
    if(event.matches){
       update();
    }
    else{
        if(update_track){
                noupdate();
        }
    }
}


const mediaQuery = window.matchMedia("(max-width: 662px)");

mediaQuery.addEventListener("change" , checkcondition);


function update(){
    const griddiv = document.createElement("div");
    griddiv.id = "griddiv";
    
    griddiv.appendChild(mcfirst);
    griddiv.appendChild(mcsecond);

    griddiv.style.width = "50%";
    mcproblem.style.width = "50%";
    griddiv.style.display = "flex";
    griddiv.style.flexDirection = "column";
    griddiv.style.justifyContent = "space-between";
    griddiv.style.marginRight = "5px";
    mcproblem.style.marginLeft = "5px";
    
   

    mcfirst.style.width = "100%";
    mcfirst.style.height = "47%";
    mcsecond.style.width = "100%";
    mcsecond.style.height = "47%";

    
    maincontainer.insertBefore(griddiv, mcproblem);
    update_track = true;
}


function noupdate(){
    
    maincontainer.insertBefore(mcfirst, mcproblem);
    maincontainer.insertBefore(mcsecond, mcproblem);

    const remover = document.getElementById("griddiv");
    remover.remove();
   

    mcfirst.style.width = "43%";
    mcfirst.style.height = "";
    mcsecond.style.width = "25%";
    mcsecond.style.height = "";
    mcproblem.style.marginLeft = "";
    mcproblem.style.width = "25%";


    update_track = true;
     

   update_track = false;
}


let update_track2 = false;


function checkcondition2(event){
    if(event.matches){
       update2();
    }
    else{
        if(update_track2){
            noupdate2();
        }
    }
}


const mediaQuery2 = window.matchMedia("(max-width: 592px)");

mediaQuery2.addEventListener("change" , checkcondition2);


function update2() {
     content.style.flexDirection = "column";
     content.style.justifyContent = "space-around";
    //  content.style.padding = "10px";
    maincontainer.style.marginTop = "20px";
    sidecontent.style.marginBottom = "20px";

    // culture.forEach((element) => {
    //     element.size.fontSize = "5px";
    // });

    // featured.forEach((element) => {
    //     element.style.fontSize = "5px";
    // });
    
    // context.forEach((element) => {
    //     element.style.fontSize = "small !important";
    // });

        indicator.forEach((element) =>{
            element.style.height = "60%";
            element.style.fontSize = "10px";
            element.style.overflow = "hidden";
            element.style.webkitLineClamp = "2";
            element.style.webkitBoxOrient = "vertical";
            element.style.display = "-webkit-box";
            element.style.overflow = "hidden";
        });

     sidecontent.style.width = "40%";

    update_track2 = true;


    

}

function noupdate2() {

    content.style.flexDirection = "";
    content.style.justifyContent = "";
   //  content.style.padding = "10px";
   maincontainer.style.marginTop = "";
   sidecontent.style.marginBottom = "";

   // culture.forEach((element) => {
   //     element.size.fontSize = "5px";
   // });

   // featured.forEach((element) => {
   //     element.style.fontSize = "5px";
   // });
   
   // context.forEach((element) => {
   //     element.style.fontSize = "small !important";
   // });

       indicator.forEach((element) =>{
           element.style.height = "";
           element.style.fontSize = "";
           element.style.overflow = "";
           element.style.webkitLineClamp = "";
           element.style.webkitBoxOrient = "";
           element.style.display = "";
           element.style.overflow = "";
       });
       sidecontent.style.width = "";
    update_track2 = false;
}




const helpplease = document.getElementById("assign10");
console.log(helpplease.id);


