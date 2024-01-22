const button_selector = document.querySelectorAll('.button')
const boby_selector = document.querySelector('body')
const heading_selector = document.querySelector('h1')
const heading2_selector = document.querySelector('h2')
console.log(heading2_selector);
button_selector.forEach((btn)=>{
    btn.addEventListener('click' , function(e){
        e.target
        if (e.target.id === 'Red') {
            boby_selector.style.background = 'radial-gradient(circle, #ff000c, #ff5347, #ff7e76, #fea5a2, #eec9c9)';
            heading_selector.style.color = '#FF7B7B';
            heading2_selector.style.color  = '#FF7B7B';
            
        

        }
        if (e.target.id === 'Blue') {
            boby_selector.style.background = 'radial-gradient(circle, #1200cb, #5f50df, #928aee, #c5c3f8, #fcfcfd)'
            heading_selector.style.color = '#5152E3'
            heading2_selector.style.color = '#5152E3'
        }
        if (e.target.id === 'Green') {
            boby_selector.style.background = 'radial-gradient(circle, #00cb11, #00de7f, #5cedc2, #adf7ec, #fcfdfd)'
            heading_selector.style.color = '#51E364'
            heading2_selector.style.color = '#51E364'
        }
        if (e.target.id === 'Yellow') {
            boby_selector.style.background = 'radial-gradient(circle, #b7d10b, #c8db5a, #d9e58b, #e8efba, #f6f8e8)'
            heading_selector.style.color = '#F4FF7B'
            heading2_selector.style.color = '#F4FF7B'
        }
        if (e.target.id === 'Pink') {
            boby_selector.style.background = 'radial-gradient(circle, #d10bd1, #df60db, #ea91e4, #f2bded, #f8e8f6)'
            heading_selector.style.color = '#FD9FE9'
            heading2_selector.style.color = '#FD9FE9'
        }
        if (e.target.id === 'black') {
            boby_selector.style.background = 'radial-gradient(circle, #000000, #212021, #3d3a3c, #5a575a, #79757a)'
            heading_selector.style.color = '#212121'
            heading2_selector.style.color = '#212121'
        }
        if (e.target.id === 'Brown') {
            boby_selector.style.background = 'radial-gradient(circle, #624002, #886b3d, #ad9977, #d3c9b6, #fbfaf8)'
            heading_selector.style.color = '#D1A369'
            heading2_selector.style.color = '#D1A369'
        }
        if (e.target.id === 'purple') {
            boby_selector.style.background = 'radial-gradient(circle, #380262, #6a4187, #9a7bad, #cab8d3, #faf8fb)'
            heading_selector.style.color = '#BF77E0'
            heading2_selector.style.color = '#BF77E0'
        }
        if (e.target.id === 'orange') {
            boby_selector.style.background = 'radial-gradient(circle, #ffaa0c, #fec057, #fed58d, #fde8c2, #fbfaf8)'
            heading_selector.style.color = '#E7CE87'
            heading2_selector.style.color = '#E7CE87'
        }
        if (e.target.id === 'grey') {
            boby_selector.style.background = 'radial-gradient(circle, #625d55, #86827b, #aba8a3, #d2d0cc, #fbfaf8)'
            heading_selector.style.color = '#7F7C73'
            heading2_selector.style.color = '#7F7C73'
        }
    });
})