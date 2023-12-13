const fat = (item) => {
    if(item === 1) {
        return 1
    } else {
        return item * fat(item -1)
    }
}

fat(100);