const container=document.querySelector('.container');
const count =document.getElementById('count');
const amount =document.getElementById('amount');
const select =document.getElementById('city');
const seats=document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculateTotal();


container.addEventListener('click', function(e){
    if(e.target.classList.contains('seat') && !e.target.classList.contains('reserved')){
        e.target.classList.toogle('selected');
        calculateTotal()
    }
});

select.addEventListener('change', function(e){
    calculateTotal();
});

function calculateTotal(){
    const selectedSeats = container.querySelectorAll('.seat.selected');

    const selectedSeatsArr =[];
    const seatsArr = [];

    selectedSeats.forEach(function(seat){
        selectedSeatsArr.push(seat);
    });
   

    seats.forEach(function(seat){
        seatsArr.push(seat);
    });


    let selectedSeatIndexs = selectedSeatsArr.map(function(seat){
        return seatsArr.indexOf(seat);
    });

    let selectedSeatCount = selectedSeats.length;
    count.innerText =selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorage(selectedSeatIndexs);


}



function getFromLocalStorage(){
        const selectedSeats =JSON.parse(localStorage.getItem('selectedSeats'));
        if(selectedSeats !=null && selectedSeats.length > 0){
            seats.forEach(function(seat,index){
                if(selectedSeats.indexOf(index) > -1){
                    seat.classList.add('selected');
                }
            });
        }

        const selectedCityIndex =localStorage.getItem('selectedCityIndex');

        if(selectedCityIndex != null){
           select.selectedIndex =selectedCityIndex;
       }     
    }


function saveToLocalStorage(indexs){
        localStorage.setItem('selectedSeats' ,JSON.stringify(indexs));
        localStorage.setItem('selectedCityIndex' , select.selectedIndex);

    }


