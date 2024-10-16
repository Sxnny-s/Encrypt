    
    const API = 'zbnn++vX8dQeiuPs+6Ba1A==HEH3HxAWoXOUavts'
    const button = document.querySelector('button').addEventListener('click',getRates)
    const input = document.querySelector('input') 
    
    
    function getRates(){
        let zip = input.value

        fetch(`https://api.api-ninjas.com/v1/salestax?zip_code=${zip}`, {

            method: 'GET', 
            headers: {
                'X-Api-Key': API 
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            document.querySelector('h2').innerText = `Zip: ${zip}  \n Total Rate: ${data[0].total_rate} \n State Rate: ${data[0].state_rate} \n City Rate: ${data[0].city_rate} \n County Rates: ${data[0].county_rate} \n Additional Rates: ${data[0].additional_rate} `
        })
        .catch(err => {
            console.log(`error ${err}`);
        });
    }