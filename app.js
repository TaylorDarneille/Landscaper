var cash = 0
var labor = 0
const yourAnswer = prompt('Hello, Mr. Cow! Are you ready to pull yourself up by your bootstraps and cut some lawns today?', 'Yes/No')
if(yourAnswer == 'Yes') {
    const begin = prompt('Landscaper: user can use teeth to cut grass.', 'Use teeth')
    if(begin == 'Use teeth') {
        monties = cash+1
        daysOfWork = labor+1
        const useTeeth = prompt('Nice! You now have $'+ monties + ' and worked ' + daysOfWork + ' day(s). ' + 'Work more?', 'Use teeth/Stick it to the man!')
        if(useTeeth == 'Use teeth') {
            monties = monties+1
            daysOfWork = daysOfWork+1    
        } else if(useTeeth == 'Stick it to the man!')
            alert('Landscaper: quitting already? In THIS economy? You will be back!')
    } else {
        alert('landscaper: no time to be lazying around! get back to work!')
    }
} else if(yourAnswer == 'No') {
    alert('Landscaper: user has lost the game of capitalism. try again tomorrow! ')
} else {
    alert('Landscaper: ????')
}




