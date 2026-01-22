document.querySelector('button').addEventListener('click',()=>{
    const place = document.getElementById('location').value;

    function updateTemp(data){
        const element = document.getElementById('weatherInfo');
        element.innerHTML = `Today's Temperature: ${data.current.temp_c}`;
    }

    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=8ac4bc9504d6436bb8633607262201&q=${place}&aqi=yes`);

    //response.json() return my data
    promise
    .then(response=>response.json())
    .then(data=>updateTemp(data)) 

})