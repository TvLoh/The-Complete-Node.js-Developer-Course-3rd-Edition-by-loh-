const greater = (name = 'user', {lable, stocke = 0} = {}) => {
  console.log('Hello ' + name);
  console.log(lable, stocke);
}

greater('Andrew')

greater()