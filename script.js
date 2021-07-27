const btn = document.querySelector('#btn');
const input = document.querySelector('#enterField');
const answer = Math.floor(Math.random() * 25) + 1;
console.log(answer)
btn.addEventListener('click', play);

function play() {
    const number = input.value;
    if (number < 1 || number > 25) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter number from 1 to 25!',

        })
    } else if (isNaN(number)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Enter number from 1 to 25!',

        })
    } else {
        if (number > answer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Try a lower number',

            })
        } else if (number < answer) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Try higher number!',

            })
        } else {
            Swal.fire({
                title: 'Sweet!',
                text: 'You WON!!!.',
                imageUrl: 'https://images.unsplash.com/photo-1500373994708-4d781bd7bd15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aGFycnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        }
    }

}