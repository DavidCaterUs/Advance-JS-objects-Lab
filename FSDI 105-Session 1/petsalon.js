const salon={ //object
      name:'Fashion Pets',
      phone:'954-288-7580',
      address:{ //object inside an object
          street:'5th Avenue',
          number:'25-A',

    },
      workingHours:{
        Open:'8:00 am',
        Close:"5:00 pm",
      },
      pets:[]

         //empty array
};

//object destructing



let{name,phone,address:{street,number},workingHours:{Open,Close}}=salon

console.log(open);

document.getElementById('info').innerHTML=`<h2> ${name} (${phone}), ${street}
${number} <br> it is open from ${Open} to ${Close} </h2>`;

function Pet(name,age,service,owner,contactPhone){
  this.hunger=10;
  this.happiness=5;
  this.name=name;
  this.age=age;
  this.contactPhone=contactPhone;
  this.owner=owner;
  this.service=service;
  this.feed=function(){
  this.hunger-=10;
  this.happiness+=10;
  }

  this.status=function(){
    console.log(this.name + 'hunger' + this.hunger + 'happiness' + this.happiness);
  };
  this.ownerContact=function(){
    console.log('Owner name:'+ this.owner + '\n' + 'Phone:'  + this.contactPhone);
  };
  this.customers=function(){
    document.write(this.name);
  };

}

// const pet1=new Pet('Zoey', 2 , 'Shower', 'Travis', '954-288-7580');
// const pet2=new Pet('Sally', 4 , 'Cut', 'Sabrina', '954-328-8765');
// const pet3=new Pet('Bruno', 6 , 'Cut Nails', 'Pablo', '954-347-9876');



 //pet1.feed();
 //pet1.status();
 //pet1.ownerContact();




console.table(salon.pets);



var pet1 = new Pet("Zoey ",2,"Shower","Omar","954-288-7580");
var pet2 = new Pet("Sally ",4,"Cut","Sabrina","954-328-8765");
var pet3 = new Pet("Bruno ",6,"Cut Nails","Pablo","954-347-9876");




salon.pets.push(pet1);
salon.pets.push(pet2);
salon.pets.push(pet3);


pet1.ownerContact('Omar');
pet2.ownerContact('Sabrina');
pet3.ownerContact('Pablo');

pet1.customers('Zoey ');
pet2.customers('Sally ');
pet3.customers('Bruno ');


alert("We have "+ salon.pets.length + " pets as customers.")
