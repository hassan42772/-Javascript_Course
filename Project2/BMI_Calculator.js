const form_selector = document.querySelector('form')
function resetPage() {
    location.reload();
}
form_selector.addEventListener('submit' ,function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const state = document.querySelector('#stage')
    const under = document.querySelector('#under')
    const normal = document.querySelector('#normal')
    const over = document.querySelector('#over')
    const bmi = (weight /((height*height)/10000)).toFixed(2)
    if (height ==='' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please Give A Vaild Height ${height}`
        result.style.color = 'red' 
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please Give A Vaild Weight ${weight} `
        result.style.color = 'red'
    }
    else if (bmi < 18.6) {
        result.innerHTML = `<span>${bmi}</span>`
        result.style.color = '#4CBB17 '
        result.style.fontSize = '2.3rem'
        state.innerHTML = `Under Weight`
        state.style.color = '#4CBB17 '
        under.style.backgroundColor = '#4CBB17 '
        under.style.borderRadius = '18px'
        under.style.padding = '10px'

    }
    else if (bmi >= 18.6 && bmi <= 24.9) {
        result.innerHTML = `<span>${bmi}</span>`
        result.style.color = '#0096FF'
        result.style.fontSize = '2.3rem'
        state.innerHTML = `Normal Range`
        state.style.color = '#0096FF'
        normal.style.backgroundColor = '#0096FF'
        normal.style.borderRadius = '18px'
        normal.style.padding = '10px'
    }
    else if (bmi > 24.9) {
        result.innerHTML = `<span>${bmi}</span>`
        result.style.color = '#FF2400'
        result.style.fontSize = '2.3rem'
        state.innerHTML = `Over Weight`
        state.style.color = '#FF2400'
        over.style.backgroundColor = '#FF2400'
        over.style.borderRadius = '18px'
        over.style.padding = '10px'

    }
    
})