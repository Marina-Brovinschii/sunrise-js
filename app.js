function adjustSun () {
    let hour = +inputHour.value
    const K=100/12
    const KC = 255/12 

    if (hour>=6 && hour <=12) {
        let left =K*(hour-6)
        sun.style.left = `${left}%`
        
        let bottom = 5*K *(hour-6)
        sun.style.bottom = `${bottom}px`
        
        let cred =100 + 3 * KC*(hour-6)
        let cgreen = 50 + 3 * KC * (hour - 6)

        let ered = 50 + 2 * KC * (hour - 6)
        let egreen = 20 + 2 * KC * (hour -6)
        sun.style.background = `radial-gradient(rgb(${cred}, ${cgreen}, 65), rgb(${ered}, ${egreen}, 4))`

        let aqua = 50 + 3 * KC * (hour - 6)
        let blue = 50 + 3 * KC * (hour - 6)
        sky.style.background = `radial-gradient(rgb(0,${aqua}, 255), rgb(0, 40, ${blue}))`

    } else if (hour>12 && hour<=18) {
        let left = K * (hour - 6)
        sun.style.left = `${left}%`

        let top = 5*K * (hour -6)
        sun.style.top = `${top}px`

        let cred =100+3 * KC * (18-hour)
        let cgreen =50+ 3 * KC * (18-hour)

        let ered = 50+2 * KC * (18-hour)
        let egreen =20+  2 * KC * (18-hour)
        sun.style.background = `radial-gradient(rgb(${cred}, ${cgreen}, 65), rgb(${ered}, ${egreen}, 4))`


        let aqua =50+ 3 * KC * (18-hour)
        let blue =50+ 3 * KC * (18-hour)
        sky.style.background = `radial-gradient(rgb(0,${aqua}, 255), rgb(0, 40, ${blue}))`
    }
    
}