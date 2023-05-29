function price()
 {
 let n = document.getElementById('name').value 
 let c = document.getElementById('contact').value
 let a = document.getElementById('address').value
 let fish= document.getElementById('p1').value
 let meat = document.getElementById('p2').value
 let shrimp = document.getElementById('p3').value
 let cabbage = document.getElementById('p4').value
 let cucumber = document.getElementById('p5').value
 let carrot = document.getElementById('p6').value
 let orange = document.getElementById('p7').value
 let guava = document.getElementById('p8').value
 let grape = document.getElementById('p9').value

 let totalP = calculatePrice(fish, meat, shrimp, cabbage,cucumber, carrot, orange, guava, grape)
 
 document.getElementById('heading').innerHTML="Confirmation Order:"
 document.getElementById('usern').innerHTML = "Name: "+ n
 document.getElementById('userc').innerHTML = "Contact number: "+ c
 document.getElementById('usera').innerHTML = "Address: "+ a
 document.getElementById('price').innerHTML = "Total Price: RM"+ totalP

 alert("You have submit your order. Thankyou!");
 }

//cal bmi
 function calculatePrice(fish, meat, shrimp, cabbage,cucumber, carrot, orange, guava, grape)
 {  
    let total=0 
    let pa=0
    let pb=0
    let pc=0
    let pd=0
    let pe=0
    let pf=0
    let pg=0
    let ph=0
    let pi=0

    if(fish!=0){
    pa= 7*fish;}

    if(meat!=0)
    pb= 11*meat;

    if(shrimp!=0)
    pc= 10*shrimp;

    if(cabbage!=0)
    pd= 8*cabbage;

    if(cucumber!=0)
    pe= 5*cucumber;

    if(carrot!=0)
    pf= 6*carrot;

    if(orange!=0)
    pg= 12*orange;

    if(guava!=0)
    ph= 12*guava;

    if(grape!=0)
    pi= 14*grape;

    total= pa+ pb+ pc+ pd+ pe+ pf+ pg+ ph+ pi;

    return total;   }
