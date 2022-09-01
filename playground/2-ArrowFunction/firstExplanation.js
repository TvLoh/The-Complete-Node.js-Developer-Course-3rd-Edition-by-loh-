const partey = {
  name: 'My',
  guestList: ['Johannes', 'Bert', 'John', 'Ante'],
  printGuestList() {
    console.log('Guest list for ' + this.name + ' BP');
    this.guestList.forEach((guest) => {
      console.log(guest + ' acces the BP of ' + this.name);
    })
  }
}

partey.printGuestList()