
// document.getElementById('submit_btn').addEventListener('click', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('name').value;
//     const Email = document.getElementById('email').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Send form data to server
//     fetch('/submitForm', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ name, Email, subject, message })
//     })
//     .then(response => {
//         if (response.ok) {
//             setTimeout(() => {
//                 const submit_thankyou= document.querySelector(".submit_thankyou");
//                 submit_thankyou.style.margin = '-60px 0px 20px 0px';
//                 submit_thankyou.style.color = 'green';
//                 submit_thankyou.innerHTML="Thank you for messaging";
            
//                 // Remove the element after another 3 seconds
//                 setTimeout(() => {
//                     submit_thankyou.remove();
//                 }, 5000);
//             }, 2000);
         
//             // alert('Form submitted successfully!');
//             // Clear form fields if submission was successful
//             document.getElementById('name').value = '';
//             document.getElementById('email').value = '';
//             document.getElementById('subject').value = '';
//             document.getElementById('message').value = '';
//         } else {
//             alert('Failed to submit form. Please try again later.');
//         }
//     })
//     .catch(error => {
//         console.error('Error:', error);
//         alert('Failed to submit form. Please try again later.');
//     });
// });

document.getElementById('submit_btn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const Email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Send form data to server
    fetch('https://rp.udaanhansrajcollege.in/submitForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, Email, subject, message })
    })
    .then(response => {
        if (response.ok) {
            setTimeout(() => {
                const submit_thankyou = document.querySelector(".submit_thankyou");
                submit_thankyou.style.margin = '-60px 0px 20px 0px';
                submit_thankyou.style.color = 'green';
                submit_thankyou.innerHTML = "Thank you for messaging";

                // Remove the element after another 3 seconds
                setTimeout(() => {
                    submit_thankyou.remove();
                }, 5000);
            }, 2000);

            // Clear form fields if submission was successful
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('subject').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Failed to submit form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to submit form. Please try again later.');
    });
});
