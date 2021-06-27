// set up container div
document.body.classList.add('bg-light');

const container = document.createElement('div');
container.className = 'header-container';

// button div
const buttonDiv = document.createElement('div'); 

// text div
const textDiv = document.createElement('div');

// put buttondiv and squarediv  >>> container div
container.appendChild(buttonDiv);
container.appendChild(textDiv);

document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(container);
});

// create button

const myBtn = document.createElement('button'); // create button element
const btnText = document.createTextNode('SING!'); //add text to button element
myBtn.appendChild(btnText); // append the button text to the button
buttonDiv.appendChild(myBtn); // append the button element to the button div
myBtn.addEventListener('click', function(){  // launch function via click event on button ID
    console.log('clicked!'); //click check

// friendContainer

const friendContainer = document.createElement('div');
friendContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-around');

    // friendHeader

    const friendHeader = document.createElement('div');
    
        //H3
        const friendName = document.createElement('H3');
       // friendName.innerText = friends;


        // Append children
        friendHeader.appendChild(friendName);
        friendContainer.appendChild(friendHeader);
        document.body.appendChild(friendContainer);

    // friendCardContainer

    const friendCardContainer = document.createElement('div');

        // friendCard
        const friendCard = document.createElement('div');

        friendCard.classList.add('card', 'm-2');

            // friendCardBody
            const friendCardBody = document.createElement('div');
            friendCardBody.classList.add()

                // friendCardText
                const friendCardText = document.createElement('p');
                
        // append friendCardContainer elements

        friendContainer.appendChild(friendCardContainer);   
        friendCardContainer.appendChild(friendCard);
        friendCard.appendChild(friendCardBody);
        friendCardBody.appendChild(friendCardText);

    
   const friends = ['Vishal', 'Luke', 'Daniel', 'Drew', 'Matt' ];


// (Loop 1 - outer loop)

    for ( let i=0; i<friends.length; i++) {

    console.log(friends[i] +":");  
    
        // add const friend = string[i]

        const friend = friends[i];

        // add const friendcontainer = div
        //friendcontainer styling
        const friendContainer = document.createElement('div');
        friendContainer.classList.add('d-flex', 'flex-wrap', 'justify-content-around');

        // const friendheader and friendname(h3)
        const friendHeader = document.createElement('div');
        const friendName = document.createElement('H3');

       // friendName.innerText = friends; //this one? no
        friendName.innerText = friend;
        friendHeader.appendChild(friendName);

        const friendCardContainer = document.createElement('div');
        friendCardContainer.classList.add('d-flex', 'flex-wrap');

        // (Loop 2 - inner loop)
        for ( let k = 99; k > 0; --k) {
        let j= k-1;
            if (k > 2 ){

                //-------- friendCard div, body and text

                // friendCard div
                // card class/styling
                const friendCard = document.createElement('div');
                friendCard.classList.add('card', 'm-2');

                // friendCardBody
                // card class/styling
                const friendCardBody = document.createElement('div');
                friendCardBody.classList.add('card-body', 'shadow-lg');

                //append friendCardBody >>> friendCard
                friendCard.appendChild(friendCardBody);

                //friendCardText
                //friendCardText ClassList text-primary

                const friendCardText = document.createElement('p');
                friendCardText.classList.add('text-primary');

                //-------------------------------------------

                //friendCardText.innertext  --- TESTING!! ---

                friendCardText.innerText =`" ${k} lines of code in the file ${k} lines of code, ${friend} strikes one out, clears it all out, ${j} lines of code in the file"`;

                // --------------------- TESTING --------------------- //

                //append friendCardText >>> friendCardBody
                //append friendCard >>> friendCardContainer
                friendCardBody.appendChild(friendCardText);
                friendCardContainer.appendChild(friendCard);
                
                //console log lyrics
                console.log(" " +k +" lines of code in the file "+ k+ " lines of code, "+ friends[i]+ " strikes one out, clears it all out, " + j + " lines of code in the file");

            } else if (2 == k ){

                //-------- friendCard div, body and text

                // friendCard div
                // card class/styling
                const friendCard = document.createElement('div');
                friendCard.classList.add('card', 'm-2');

                // friendCardBody
                // card class/styling
                const friendCardBody = document.createElement('div');
                friendCardBody.classList.add('card-body', 'shadow-lg');

                //append friendCardBody >>> friendCard
                friendCard.appendChild(friendCardBody);

                //friendCardText
                //friendCardText ClassList text-primary

                const friendCardText = document.createElement('p');
                friendCardText.classList.add('text-primary');

                //-------------------------------------------

                //append friendCardText >>> friendCardBody
                //append friendCard >>> friendCardContainer
                friendCardBody.appendChild(friendCardText);
                friendCardContainer.appendChild(friendCard);

                friendCardText.innerText =`" ${k} lines of code in the file ${k} lines of code, ${friend} strikes one out, clears it all out, ${j} line of code in the file"`;

                console.log(" " +k +" lines of code in the file "+ k+ " lines of code, "+ friends[i]+ " strikes one out, clears it all out, " + j + " line of code in the file");


            } else if (k=1) {


                //-------- friendCard div, body and text

                // friendCard div
                // card class/styling
                const friendCard = document.createElement('div');
                friendCard.classList.add('card', 'm-2');

                // friendCardBody
                // card class/styling
                const friendCardBody = document.createElement('div');
                friendCardBody.classList.add('card-body', 'shadow-lg');

                //append friendCardBody >>> friendCard
                friendCard.appendChild(friendCardBody);

                //friendCardText
                //friendCardText ClassList text-primary
                const friendCardText = document.createElement('p');
                friendCardText.classList.add('text-primary');

                //-------------------------------------------

                //append friendCardText >>> friendCardBody
                //append friendCard >>> friendCardContainer
                friendCardBody.appendChild(friendCardText);
                friendCardContainer.appendChild(friendCard);


                friendCardText.innerText =`" OMFG!!! ${k} line of code in the file, ${k} LINE of code, ${friend} strikes one out, clears it all out, no more lines of code in the file"`;

                console.log('OMG!!! ' +k + " line of code in the file, "+ k+" line of code, "+ friends[i]+ " strikes one out, clears it all out, no more lines of code in the file");
            }

         }

         // append friendHeader, friendcardcontainer, friendcontainer to body?
         friendContainer.appendChild(friendHeader);
         friendContainer.appendChild(friendCardContainer);
         document.body.appendChild(friendContainer);

    }


});













    